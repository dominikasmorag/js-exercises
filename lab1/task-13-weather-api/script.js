const latitude = 50.29;
const longitude = 18.95;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;


displayData(url);

console.log(changeUrl(50.41, 20.31));

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log("Błąd połączenia");
        console.error(error.message);
    }
}

async function displayData(url) {
    const data = await getData(url);
    console.log(`Aktualna temperatura: ${data.current.temperature_2m} ${data.current_units.temperature_2m}\nPrędkość wiatru: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`);
}

function changeUrl(latitude, longitude) {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
}