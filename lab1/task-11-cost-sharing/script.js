const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" },
  { label: "mandat", amount: 500, paidBy: "Piotr" }
];

const totalCosts = calculateTotal(tripCosts);
const sumForEach = sumByPerson(tripCosts);
const split = splitExpenses(tripCosts);

console.log(`Całkowity koszt wyjazdu: ${totalCosts}`);
console.log(`Wydatki na osobę: `, sumForEach);
console.log(`Największy wydatek: `, findBiggestExpense(tripCosts));
displayReport(tripCosts);
console.log("Podział: ", split);

function calculateTotal(tripCosts) {
    return tripCosts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount, 0
    );
}

function sumByPerson(tripCosts) {
    const result = []

    tripCosts.forEach(item => {
        const person = item.paidBy;

        const found = result.find(p => p.person === person);

        if (found) {
            found.total += item.amount;
        } else {
            result.push({
                person: person,
                total: item.amount
            })
        }
    });
    return result;
}

function findBiggestExpense(tripCosts) {
    const biggestExpense = sumByPerson(tripCosts);
    const result = biggestExpense.reduce(
        (max, current) =>
            current.total > max.total ? current : max
    );

    return result;
}

function displayReport(tripCosts) {
    const sumForPerson = sumByPerson(tripCosts);
    const result = sumForPerson.map(
        item => `${item.person} wydał/a: ${item.total}`

    ).join("\n");
    console.log(result);
}

function splitExpenses(tripCosts) {
    const sumForPerson = sumByPerson(tripCosts);
    const total = calculateTotal(tripCosts);
    const equalSum = total / sumForPerson.length;

    return sumForPerson.map(person => {
        const diff = person.total - equalSum;

        return {
            person: person.person,
            toReceive: diff > 0 ? diff : 0,
            toGive: diff < 0 ? -diff : 0,
        }
    })
}