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
    it("should increase quality in Aged Brie", function() {
        const items = itemBuilder(itemsAtSale.agedBrie, 0, 2).updateQuality()
        expect(items[0].quality).toBe(4)
    });
    it("should increase quality in backstage concert", function() {
        const items = itemBuilder(itemsAtSale.backstageConcert, 7, 2).updateQuality()
        expect(items[0].quality).toBeGreaterThan(2)
    });
    it("should increase quality in backstage concert by 2 when there are 5 - 10 days till sell in", function() {
        const items = itemBuilder(itemsAtSale.backstageConcert, 7, 2).updateQuality()
        expect(items[0].quality).toBe(4)
    });
    it("should increase quality in backstage concert by 3 when there are less than 5 days till sell in", function() {
        const items = itemBuilder(itemsAtSale.backstageConcert, 5, 2).updateQuality()
        expect(items[0].quality).toBe(5)
    });
    it("should drop quality in backstage concert to 0 when the sell in day pass", function() {
        const items = itemBuilder(itemsAtSale.backstageConcert, 0, 27).updateQuality()
        expect(items[0].quality).toBe(0)
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
    });
    it("should degrade quality twice as fast when the sell data has passed", function() {
        const items = itemBuilder(itemsAtSale.dexterityVest, 0, 10).updateQuality();
        expect(items[0].quality).toBe(8)
    })
})