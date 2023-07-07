import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Cheese, Legendary, Basic, Conjured, Viptickets} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("Brie sellIn is +pos, quality increases + 1", () => {
    const testItem = new Cheese("Aged Brie", 2, 0);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(1);
  });
});

describe("updateQuality", () => {
  it("Brie sellIn is -neg, quality increases + 2", () => {
    const testItem = new Cheese("Aged Brie", -1, 0);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(-2);
  });
});

describe("updateQuality", () => {
  it("Sulfuras never sells and never changes in quality", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
});

describe("updateQuality", () => {
  it("Backstage pass quality increases by 2 when sellIn <= 10", () => {
    const testItem = new Viptickets("Backstage passes to a TAFKAL80ETC concert", 9, 15);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(17);
    expect(testItem.sellIn).toBe(8);
  });
});

describe("updateQuality", () => {
  it("Backstage pass quality increases by 3 when sellIn <= 5", () => {
    const testItem = new Viptickets("Backstage passes to a TAFKAL80ETC concert", 4, 15);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(18);
    expect(testItem.sellIn).toBe(3);
  });
});

describe("updateQuality", () => {
  it("Backstage pass quality is 0 when sellIn <= 0", () => {
    const testItem = new Viptickets("Backstage passes to a TAFKAL80ETC concert", -1, 22);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-2);
  });
});

describe("updateQuality", () => {
  it("Conjured items degrade in quality twice as fast", () => {
    const testItem = new Conjured("Conjured Mana Cake", 3, 6);
    items.push(testItem);

    testItem.updateQuality();

    expect(testItem.quality).toBe(4);
    expect(testItem.sellIn).toBe(2);
  });
});