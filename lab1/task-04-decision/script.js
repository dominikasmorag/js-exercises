const hasLaptop = true;
const hasCharger = true;
const hasNotebook = false;
const hasPen = false;
const dayType = "laboratorium";

if(hasLaptop && hasCharger && hasNotebook && hasPen) {
    console.log(`Student jest gotowy`);
} else {
    console.log(`Student nie jest gotowy`);
}

!hasLaptop && console.log("Brak laptopa");
!hasCharger && console.log("Brak ładowarki");
!hasNotebook && console.log("Brak zeszytu");
!hasPen && console.log("Brak długopisu!");

let ready = (hasLaptop && hasCharger && hasNotebook && hasPen) ? true : false;

console.log(ready ? "gotowy" : "niegotowy");

if(ready) {
    console.log(`gotowy na ${dayType}`);
} else {
    console.log(`niegotowy na ${dayType}`);
}