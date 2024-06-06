const {Shop, Item} = require("../../src/gilded-rose/gilded_rose");
const {expectedError} = require("@babel/core/lib/errors/rewrite-stack-trace");

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

describe("Gilded Rose - Main Rules", function(){
    it("item quality never could be under 0", function() {
        const items = itemBuilder("Great Axe", 5, 0).updateQuality()
        expect(items[0].quality).toBe(0);
    });
    it("should mantein item quality under or equal to 50 (except Sulfuras, Hand of Ragaros)", function () {
        const items = itemBuilder(itemsAtSale.agedBrie, 3, 50).updateQuality()
        expect(items[0].quality).toBe(50)
    })
})