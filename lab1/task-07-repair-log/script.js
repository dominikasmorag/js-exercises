const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" },
  { id: 4, client: "Kasia", device: "laptop", status: "w trakcie" },
  { id: 5, client: "Marek", device: "telefon", status: "nowe" },
  { id: 6, client: "Tomek", device: "tablet", status: "zakończone" },
  { id: 7, client: "Magda", device: "laptop", status: "nowe" },
  { id: 8, client: "Bartek", device: "telefon", status: "w trakcie" },
  { id: 9, client: "Natalia", device: "tablet", status: "zakończone" },
  { id: 10, client: "Paweł", device: "laptop", status: "w trakcie" },
  { id: 11, client: "Ewa", device: "telefon", status: "nowe" },
  { id: 12, client: "Karol", device: "tablet", status: "zakończone" }
];

console.log(`Naprawa o ID 1:`, findById(repairs, 1));
console.log(`Stara lista przed aktualizacją statusu:`, repairs);
console.log(`Nowa lista po aktualizacji statusu naprawy od ID 1:`, updateStatus(repairs, 1, "zakończone"));
console.log(`Liczba napraw o statusie nowe: ${countByStatus(repairs, "nowe")}`);

function findById(listOfRepairs, id) {
    return listOfRepairs.find(item => item.id == id);
}

function updateStatus(listOfRepairs, id, status) {
    if (status != "nowe" && status != "w trakcie" && status != "zakończone") {
        console.log("Brak wskazanego statusu");
        return listOfRepairs;
    }

    const updatedList = listOfRepairs
        .map(item => item.id == id ? { ...item, status: status } : item);

    return updatedList;
}

function countByStatus(listOfRepairs, status) {
    const listByStatus = listOfRepairs
        .filter(item => item.status == status);

    return listByStatus.length;
}