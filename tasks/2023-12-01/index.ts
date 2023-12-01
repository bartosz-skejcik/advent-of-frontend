interface GiftRegistryType {
    childId: number;
    gifts: string[];
}

export class GiftRegistry {
    children: GiftRegistryType[] = [];

    constructor() {
        this.children = [];
    }

    getGiftsForChild(childId: number): string[] {
        const child = this.children.filter(
            (child) => child.childId == childId
        )[0];

        return child.gifts;
    }

    addGift(childId: number, gift: string) {
        const child = this.children.filter(
            (child) => child.childId == childId
        )[0];

        if (child == undefined) {
            this.children.push({
                childId: childId,
                gifts: [gift],
            });
        } else {
            child.gifts.push(gift);
        }
    }

    removeGift(childId: number, gift: string) {
        const child = this.children.filter(
            (child) => child.childId == childId
        )[0];

        const index = child.gifts.indexOf(gift);

        if (index > -1) {
            child.gifts.splice(index, 1);
        } else {
            throw Error("Gift not found");
        }
    }
}
