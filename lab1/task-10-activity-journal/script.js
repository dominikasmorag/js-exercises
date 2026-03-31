const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 },
  { type: "basen", minutes: 45, calories: 300 }
];

const minTime = 30;

const totalTime = calculateTotalTime(activities);
const totalCalories = calculateTotalCalories(activities);
const longestActivities = filterLongest(activities, minTime);
const mostCaloric = findMostCaloric(activities);

console.log(`Całkowity czas treningów: ${totalTime} minut.`);
console.log(`Łącznie spalono: ${totalCalories} kalorii.`);
console.log(`Najdłuższe treningi:`, longestActivities);
console.log(`Najbardziej kaloryczny trening:`, mostCaloric);

function calculateTotalTime(activities) {
    const totalTime = activities
        .reduce((accumulator, currentValue) => accumulator + currentValue.minutes, 0);
    return totalTime;
}

function calculateTotalCalories(activities) {
    const totalCalories = activities.reduce(
        (accumulator, currentValue) => accumulator + currentValue.calories, 0);
    return totalCalories;
}

function filterLongest(activities, minTime) {
    const longestActivities = activities.filter(
        activity => activity.minutes >= minTime
    ).map(activity => ({
        type: activity.type,
        minutes: activity.minutes,
        calories: activity.calories
    })
    )
    return longestActivities;
}

function findMostCaloric(activities) {
    return activities.reduce((max, current) =>
        current.calories > max.calories ? current : max
    );
}