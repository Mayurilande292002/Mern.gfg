let API_KEY = 'ce69b3890c0cdcdc6393ab44e7c1da96';
const input = document.getElementById('cityName');
const form = document.getElementById('weatherForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => { // Make the function async
    e.preventDefault();
    const city = input.value;
    console.log(city);
    form.reset();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    result.innerHTML = `<p style="color:blue">Loading...</p>`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            alert("City not found");
            throw new Error("No city");
        }

        const data = await res.json();
        const temp = data.main.temp;
        const humid = data.main.humidity;
       
        result.innerHTML =
            `<h2>${city.toUpperCase()}</h2>
             <p>🌡️ Temperature: ${temp}°C</p>
             <p>☁️ Humidity: ${humid} %</p>`;

        console.log(data);
    } catch (err) {
        console.error("Data error", err.message);
        result.innerHTML = `<p style="color:red">${err.message}</p>`;
    }
});
