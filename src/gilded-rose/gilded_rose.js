class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const itemsAtSale = {
    sulfurasHandofRagnaros: "Sulfuras, Hand of Ragnaros",
    agedBrie: "Aged Brie",
    backstageConcert: "Backstage passes to a TAFKAL80ETC concert",
    conjuredManaCake: "Conjured Mana Cake",
    dexterityVest: "+5 Dexterity Vest"
}

const hasToDecreaseQualityItem = (item) => {
    return item.name !== itemsAtSale.agedBrie && item.name !== itemsAtSale.backstageConcert
}

const decreaseSellInDay = (item) => {
    if (item.name !== itemsAtSale.sulfurasHandofRagnaros) {
        return item.sellIn - 1;
    }
}

const decreaseQuality = (item) => {
    if (item.name !== itemsAtSale.sulfurasHandofRagnaros) {
        return item.quality - 1 > 0 ? item.quality -1 : 0;
    }
    return item.quality
}

const increaseQuality = (item) => {
    if (item.name === itemsAtSale.backstageConcert) {
        if (item.sellIn < 0) {
            return 0
        }
        if (item.sellIn < 6) {
            return item.quality + 3 <= 50 ? item.quality + 3 : 50;
        }
        if (item.sellIn < 11) {
            return item.quality + 2 <= 50 ? item.quality + 2 : 50;
        }
    }
    return item.quality + 1 <= 50 ? item.quality + 1 : 50;
}

class Shop {
    constructor(items=[]){
        this.items = items;
    }
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (hasToDecreaseQualityItem(this.items[i])) {
                this.items[i].quality = decreaseQuality(this.items[i])
            } else {
                this.items[i].quality = increaseQuality(this.items[i])
            }
            this.items[i].sellIn = decreaseSellInDay(this.items[i])
            if (this.items[i].sellIn < 0) {
                if (hasToDecreaseQualityItem(this.items[i])) {
                    this.items[i].quality = decreaseQuality(this.items[i])
                } else {
                    this.items[i].quality = increaseQuality(this.items[i])
                }
            }
        }

        return this.items;
    }
}

module.exports = {
    Item,
    Shop
}