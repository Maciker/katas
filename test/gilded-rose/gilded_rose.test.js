const {Shop, Item} = require("../../src/gilded-rose/gilded_rose");

const sulfurasHandofRagnaros = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
const agedBrie = new Shop([new Item("Aged Brie", 10, 20)]);
const backstageConcert = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25)]);

describe("Gilded Rose - Items rules", function() {
    it("should not change the item: Sulfuras, Hand of Ragnaros ", function() {
        const items = sulfurasHandofRagnaros.updateQuality();
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).toBe(80);
    });
});