const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true },
  { name: "Kasia Wójcik", phone: "503-222-111", city: "Katowice", favorite: false },
  { name: "Tomasz Król", phone: "504-333-222", city: "Sosnowiec", favorite: true },
  { name: "Magda Kaczmarek", phone: "505-444-333", city: "Katowice", favorite: false }
];

const fragment1 = "ma";
const fragment2 = "wó";
const city = "Sosnowiec";

const foundByCity = findByCity(contacts, city);
const favorites = findFavorites(contacts);
const foundByFrag1 = findByFragment(contacts, fragment1)
const foundByFrag2 = findByFragment(contacts, fragment2);

console.log(`Kontakty znalezione po mieście ${city}: `, foundByCity);
console.log("Ulubione kontakty", favorites);
console.log(`Sformatowane kontakty dla miasta ${city}: `, formatContacts(foundByCity));
console.log(`Wyniki wyszukiwania dla "${fragment1}: `, formatContacts(foundByFrag1));
console.log(`Wyniki wyszukiwania dla "${fragment2}: `, formatContacts(foundByFrag2));

function findByCity(contacts, city) {
    city = city.toLowerCase();
    return contacts.filter(contact => contact.city.toLowerCase() === city);
}

function findFavorites(contacts) {
    return contacts.filter(contact => contact.favorite);
}

function formatContacts(contacts) {
    return contacts.map(item =>
        `${item.name} - ${item.phone}`
    );
}

function findByFragment(contacts, nameFragment) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(nameFragment.toLowerCase()));
}