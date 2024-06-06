const {Shop, Item} = require("../../src/gilded-rose/gilded_rose");

const itemsAtSale = {
    sulfurasHandofRagnaros: "Sulfuras, Hand of Ragnaros",
    agedBrie: "Aged Brie",
    backstageConcert: "Backstage passes to a TAFKAL80ETC concert",
    conjuredManaCake: "Conjured Mana Cake",
    dexterityVest: "+5 Dexterity Vest"
}

const itemBuilder = (itemName = '' ,sellIn=1, quality=80) => {
    return new Shop([new Item(itemName , sellIn, quality)]);
}

describe("Gilded Rose - Items rules", function() {
    it("should not change the item: Sulfuras, Hand of Ragnaros ", function() {
        const items = itemBuilder(itemsAtSale.sulfurasHandofRagnaros).updateQuality();
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).toBe(80);
    });
});