const {Shop, Item} = require("../../src/gilded-rose/gilded_rose");

describe("Gilded Rose", function() {
    it("should not change the item: Sulfuras, Hand of Ragnaros ", function() {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).toBe(80);
    });
});Item