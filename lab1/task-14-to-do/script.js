let todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false },
  { id: 4, title: "Napisać wstęp", done: false }
];
console.log(`Lista przed edycją:\n`, todos);
todos = add(todos, "Wysłać maila");
console.log(`Lista po dodaniu jednej pozycji:\n`, todos);

console.log(`Lista niewykonanych zadań\n`, getUndone(todos));
todos = markAsDone(todos, 1);
console.log(`Lista zadań do wykonania po oznaczeniu id nr 1 jako wykonane:\n`, getUndone(todos));

function add(todos, title) {
    return [
        ...todos,
        {
            id: findLastId(todos) + 1,
            title: title,
            done: false
        }
    ];
}

function findLastId(todos) {
    const maxId = todos.reduce((max, current) => {
        return current.id > max ? current.id : max
    }, 0);
    return maxId;
}

function markAsDone(todos, id) {
    return todos.map(item =>
        item.id === id ? {...item, done: true} : item
    );
}

function getUndone(todos) {
    return todos.filter(item => !item.done);
}