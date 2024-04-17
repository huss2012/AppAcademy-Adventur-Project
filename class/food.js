const item = require("./item");

const Item = item.Item
// FILL THIS OUT

class Food extends Item{
  constructor(name, description) {
    super(name, description);
  }

}

module.exports = {
  Food,
};
