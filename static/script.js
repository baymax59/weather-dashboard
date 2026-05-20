async function getWeather() {

    const weatherDiv =
        document.getElementById("weatherData");

    weatherDiv.innerHTML = "Loading...";

    try {

        const response =
            await fetch('/weather');

        const data =
            await response.json();

        console.log(data);

        const output = `

            <div class="weather-card">

                <h2>
                    ${data.location.name},
                    ${data.location.country}
                </h2>

                <img src="https:${data.current.condition.icon}">

                <h3>
                    ${data.current.condition.text}
                </h3>

                <p>
                    🌡 Temperature:
                    ${data.current.temp_c} °C
                </p>

                <p>
                    🤒 Feels Like:
                    ${data.current.feelslike_c} °C
                </p>

                <p>
                    💧 Humidity:
                    ${data.current.humidity}%
                </p>

                <p>
                    🌬 Wind Speed:
                    ${data.current.wind_kph} kph
                </p>

                <p>
                    🔵 Pressure:
                    ${data.current.pressure_mb} mb
                </p>

                <p>
                    👁 Visibility:
                    ${data.current.vis_km} km
                </p>

            </div>

        `;

        weatherDiv.innerHTML = output;

    } catch (error) {

        console.log(error);

        weatherDiv.innerHTML =
            "Error Fetching Weather Data";
    }
}