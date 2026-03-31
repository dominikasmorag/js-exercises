const expenses = [20.21, 30.60, 13.30, 99.99, 41.20, 32.50, 13.99, 21, 83, 29.99]

console.log(`Wydatki: ${expenses}\n
Suma wydatków: ${calculateSum(expenses)} zł\n
Średni wydatek: ${calculateAverage(expenses)} zł\n
Największy wydatek: ${calculateMax(expenses)} zł\n
Najmniejszy wydatek: ${calculateMin(expenses)} zł`);

function calculateSum(expenses) {
    let sum = expenses.reduce((acc, current) => acc + current, 0);
    return Math.round(sum * 100) / 100;
}

function calculateAverage(expenses) {
    let sumToDivide = calculateSum(expenses);
    return Math.round((sumToDivide / expenses.length) * 100) / 100;
}

function calculateMax(expenses) {
    return Math.max(...expenses);
}

function calculateMin(expenses) {
    return Math.min(...expenses);
}