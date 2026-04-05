const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "poniedziałek", subject: "Matematyka", room: "C21", online: false },
  { day: "poniedziałek", subject: "Angielski", room: "online", online: true },

  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "wtorek", subject: "Algorytmy", room: "B15", online: false },

  { day: "środa", subject: "Systemy operacyjne", room: "D10", online: false },
  { day: "środa", subject: "WF", room: "hala", online: false },

  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "czwartek", subject: "UX", room: "online", online: true },

  { day: "piątek", subject: "Sieci komputerowe", room: "A01", online: false },
  { day: "piątek", subject: "Projekt zespołowy", room: "online", online: true }
];

const day = "poniedziałek";
const daySchedule = getByDay(schedule, day);
const classesQuantityByDay = countSubjects(daySchedule);
console.log(`Łączna ilość zajęć w tygodniu: ${countSubjects(schedule)}`);

console.log(`Ilość zajęc dla dnia "${day}": ${classesQuantityByDay}`);
console.log(`Lista zajęć:\n${displaySchedule(daySchedule)}`);

function getByDay(schedule, day) {
    return schedule.filter(item => item.day === day.toLowerCase());
}

function displaySchedule(schedule) {
    return schedule.map(item => `${item.subject} - ${item.room} - ${item.online ? "online" : "stacjonarnie" }`)
    .join("\n");
}

function countSubjects(schedule) {
    return schedule.length;
}

function getOnlineClasses(schedule) {
    return schedule.filter(item => item.online);
}