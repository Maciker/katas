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

const decreaseQuality = (item) => {
    if (item.name !== itemsAtSale.sulfurasHandofRagnaros) {
        return item.quality - 1 > 0 ? item.quality -1 : 0;
    }
    return item.quality
}

const increaseQuality = (item) => {
    let increaseValue = 0;
    if (item.quality < 50) {
        increaseValue += 1
        if (item.name === itemsAtSale.backstageConcert) {
            if (item.sellIn < 11) {
                if (item.quality < 50) {
                    increaseValue += 1;
                }
            }
            if (item.sellIn < 6) {
                if (item.quality < 50) {
                    increaseValue += 1;
                }
            }
        }
    }
    return increaseValue;
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
                this.items[i].quality += increaseQuality(this.items[i])
            }
            if (this.items[i].name != itemsAtSale.sulfurasHandofRagnaros) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != itemsAtSale.agedBrie) {
                    if (this.items[i].name != itemsAtSale.backstageConcert) {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != itemsAtSale.sulfurasHandofRagnaros) {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
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