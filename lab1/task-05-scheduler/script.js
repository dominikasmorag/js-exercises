const tasks = ["laboratorium", "zakupy", "weterynarz", "basen"];

console.log(createDayPlan("Dominika", tasks));
console.log(createDayPlan("Jan"));

function createDayPlan(name, tasks = ["Utworzyć plan dnia"]) {
    const list = tasks
        .map((task, index) => `${index +1}. ${task}`)
        .join("\n")

    return `Plan dnia dla ${name} (${tasks.length} zadań):\n${list}`;
}