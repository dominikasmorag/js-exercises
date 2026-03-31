const shoppingList = [
  { name: "makaron", quantity: 3, urgent: false },
  { name: "mleko", quantity: 2, urgent: true },
  { name: "masło", quantity: 1, urgent: false },
  { name: "pomidory", quantity: 8, urgent: true },
  { name: "bułki", quantity: 6, urgent: false },
  { name: "sałata", quantity: 1, urgent: false },
  { name: "chleb", quantity: 1, urgent: true },
  { name: "jajka", quantity: 20, urgent: true }
];

console.log(`Lista zakupów:\n${displayList(shoppingList)}`);
console.log(`Lista pilnycyh zakupów:\n${displayList(displayUrgent(shoppingList))}`);

const upperCaseProducts = productsToUpperCase(shoppingList);
console.log(`Lista zakupów z wielkich liter:\n${upperCaseProducts}`);
console.log(`Liczba produktów pilnych: ${countUrgentProducts(shoppingList)}`)

function displayList(shoppingList) {
    const list = shoppingList
        .map(item => `${item.name} ${item.quantity} szt. ${item.urgent ? "PILNE" : ""}` )
        .join("\n");

    return list;
}

function displayUrgent(shoppingList) {
    const urgentList = shoppingList.filter(product => product.urgent);

    return urgentList;
}

function productsToUpperCase(shoppingList) {
    const productsToUpper = shoppingList
        .map((product) => product.name.toUpperCase())
        .join("\n");

    return productsToUpper;
}

function countUrgentProducts(shoppingList) {
    return displayUrgent(shoppingList).length;
}