export class ChristmasQueue<T> {
    queue: { item: T; priority: number }[];

    constructor() {
        this.queue = [];
    }

    enqueue(item: any, priority: number) {
        this.queue.push({ item, priority });
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("There are no letters in the queue!");
        }

        let highestPriorityIndex = 0;
        for (let i = 1; i < this.queue.length; i++) {
            if (
                this.queue[i].priority >
                this.queue[highestPriorityIndex].priority
            ) {
                highestPriorityIndex = i;
            }
        }

        return this.queue.splice(highestPriorityIndex, 1)[0].item;
    }
}
