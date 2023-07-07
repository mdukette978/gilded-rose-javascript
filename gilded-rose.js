export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Basic extends Item {
  constructor (name, sellIn, quality,) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality -= 2;
    } else {
      this.quality-= 1;
    }

    if (this.quality <= 0) {
      this.quality === 0;
    } if (this.quality >= 50) {
      this.quality === 50;
    }
    this.sellIn--;
  }
}

export class Cheese extends Item {
  constructor (name, sellIn, quality,) {
    super(name, sellIn, quality);
    //this.name = "Aged Brie";
  }
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality += 2
    } else if (this.quality < 50 && this.sellIn >= 0){
        this.quality += 1;
    } 
    if (this.quality > 50) {
        this.quality = 50;
    }
    this.sellIn--;
  }
}

export class Viptickets extends Item {
  constructor (name, sellIn, quality,) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    if (this.sellIn > 10 && this.quality < 50) {
      this.quality += 1;
    }
    //quality increases by 2 when sellIn <= 10
    if (this.sellIn <= 10 && this.sellIn > 5 && this.quality < 49) {
      this.quality += 2;
    }
    //quality increases by 3 when sellIn <= 5
    if (this.sellIn <= 5 && this.sellIn > 0 && this.quality < 48) {
      this.quality += 3;
    }
    //quality is 0 when sellIn <= 0
    if (this.sellIn <= 0) {
      this.quality = 0;
    }
    this.sellIn--;
  }
}

export class Conjured extends Item {
  constructor (name, sellIn, quality,) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    //degrade in quality twice as fast
    if (this.sellIn < 0) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }

    if (this.quality <= 0) {
      this.quality === 0;
    } if (this.quality >= 50) {
      this.quality === 50;
    }
    this.sellIn--;
  }
}

export class Legendary extends Item {
  constructor (name, sellIn, quality,) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    //no changes needed
  }
}



export let items = [];
//items.push(new Basic("+5 Dexterity Vest", 10, 20))
items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Viptickets("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//         if (item.name === "Conjured Mana Cake") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1; //quality 16
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1; // quality 17
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1; // quality 18
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1; //sellin -2
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1; //quality 
//         }
//       }
//     }
//   }
// };
