const user = {
    name: "Adam",
    surname: "Brzęczkowski",
    city: "Chorzów",
    age: 46,
    fieldOfStudy: "filologia angielska",
    email: "adam123@mail.com"
};

console.log(user.name + " " + user.surname);

console.log(`Imię i nazwisko: ${user.name} ${user.surname}\nKierunek studiów: ${user.fieldOfStudy}\nMiejsce zamieszkania: ${user.city}`);

console.log(isAdult(user));

function isAdult(user) {
    if(user.age >= 18) {
        return `${user.name} ${user.surname} jest pełnoletni`;
    }
    else {
        return `${user.name} ${user.surname} nie jest jeszcze pełnoletni.`;
    }
}

console.log(`Adres e-mail dla: ${user.name} ${user.surname} to ${user.email}`);
