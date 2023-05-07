"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    instructions: "Nothing special"
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
let myIceCream2 = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
function tooManyScoops2(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2(myIceCream2));
console.log(tooManyScoops2({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
//# sourceMappingURL=Playground.js.map