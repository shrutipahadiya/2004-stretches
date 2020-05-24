//YOU WILL BE EDITING THIS CODE

class CoffeeShop {
  constructor() {
    this.pendingOrders = [];
    this.completedOrders = [];
    this.menu = ['mocha', 'latte', 'flat-white', 'drip', 'espresso'];
  }

  inputOrder(str) {
    this.pendingOrders.push(str);
  }

  makeCoffee() {
   // this.pendingOrders.length--;
   // this.completedOrders.length++;
   // this.completedOrders.push('latte');
     const coffeeOrder = this.pendingOrders.shift();
    // console.log(cofeeOrder);
     this.completedOrders.push(coffeeOrder);
  }

  printMenu() {
    return this.menu;
  }
}

module.exports = { CoffeeShop };
