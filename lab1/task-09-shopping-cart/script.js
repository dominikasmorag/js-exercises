const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 },
  { name: "Masło", price: 7.5, quantity: 1 },
  { name: "Jajka", price: 12.0, quantity: 1 },
  { name: "Mleko", price: 3.8, quantity: 2 }
];

const discountThreshold = 30;
const discountPercent = 10;

console.log(calculateProductsPrice(cart));

console.log(calculateSum(cart));

console.log(displayList(cart));

console.log(calculateWithDiscount(cart, discountPercent, discountThreshold));

displayReport(cart, discountPercent, discountThreshold);

function calculateProductsPrice(cart) {
    const prices = cart.map(
        item => ({
            name: item.name,
            quantity: item.quantity,
            total: item.price * item.quantity
        })
    )
    return prices;
}

function calculateSum(cart) {
    const sum = cart.reduce(
        (accumulator, currentValue) =>
            accumulator + (currentValue.price * currentValue.quantity), 0);
    return sum;
}

function displayList(cart) {
    const shoppingList = cart.map(
        item => `${item.name} ${item.quantity}x`)
        .join("\n")

    return shoppingList;
}

function calculateWithDiscount(cart, discountPercent, discountThreshold) {
    let sumBeforeDiscount = calculateSum(cart);
    let sumAfterDiscount = sumBeforeDiscount;
    if (sumBeforeDiscount >= discountThreshold) {
        sumAfterDiscount *= ((100-discountPercent)/100);
    }
    return sumAfterDiscount;
}

function displayReport(cart, discountPercent, discountThreshold) {
    const listWithPrices = calculateProductsPrice(cart).map(item => `\n${item.name} ${item.quantity}x ${item.total}`);

    console.log(
        `Raport końcowy:\n${listWithPrices}\n
        Suma przed rabatem: ${calculateSum(cart)}\n
        Suma po rabacie: ${calculateWithDiscount(cart, discountPercent, discountThreshold)}`
    )
}