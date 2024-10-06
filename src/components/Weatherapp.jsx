// import React, { useState } from "react";

// export default function Weather() {
//     let api = {
//         key: "b19918048e4646db48d43bb7617efbfd",
//         url: "https://api.openweathermap.org/data/2.5/weather"
//     };

//     let [search, setSearch] = useState("");
//     let [weather, SetWeather] = useState({});
//     let [loading, setLoading] = useState(false);

//     let SearchWeather = () => {
//         setLoading(true);
        
//         fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`) // farhenheit to celcius
//             .then(res => res.json())
//             .then(value => {
//                 SetWeather(value);
//                 setLoading(false);
//         })
//         .catch(() => {
//             setLoading(false); // Handle error and stop loading
//         });
//     };
//     // console.log(typeof(weather));
    

//     let Onkey = (e) => {
//         if (e.key === "Enter") {
//             SearchWeather()
//         }
//     }
//     return (
//         <div>
//             <h1>Weather</h1>
//             <section>
//                 <div>
//                     <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyUp={Onkey} />
//                 </div>
//                 <button onClick={SearchWeather}  >Search</button>
//             </section>

//             { loading ? (
//                 <p>Loading the results...</p>
//             ):
//             (weather.main !== undefined ? // main contains weather data
//                 (
//                     <><br />
//                         <h3>{weather.name}</h3>
//                         <p><b>Temp:</b>{weather.main.temp}</p>
//                     </>
//                 ) : (<p>not found</p>)
//             )}
//         </div>

//     );
// }


import React, { useState } from "react";


export default function Weather() {
    let api = {
        key: "b19918048e4646db48d43bb7617efbfd",
        url: "https://api.openweathermap.org/data/2.5/weather"
    };

    let [search, setSearch] = useState("");
    let [weather, SetWeather] = useState({});
    let [loading, setLoading] = useState(false);

    let SearchWeather = () => {
        setLoading(true);

        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(value => {
                SetWeather(value);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    let Onkey = (e) => {
        if (e.key === "Enter") {
            SearchWeather();
        }
    };

    return (
        <div className="weather-container">
            <h1 className="weather-title">Weather App</h1>
            <section className="search-section">
                <input
                    type="text"
                    className="search-input"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={Onkey}
                    placeholder="Enter city name"
                />
                <button className="search-button" onClick={SearchWeather}>Search</button>
            </section>

            {loading ? (
                <p className="loading-message" style={{color:'green'}}>Loading the results...</p>
            ) : (
                (weather.main !== undefined ? (
                    <div className="weather-info">
                        <h3 className="weather-location">{weather.name}</h3>
                        <p className="weather-temp"><b>Temp:</b> {weather.main.temp} °C</p>

                        <p className="weather-temp"><b>Feels Like:</b>{weather.main.feels_like}</p>
                        <p className="weather-temp"><b>Humidity:</b>{weather.main.humidity}</p>
                        <p className="weather-temp"><b>Current Condition:</b>{weather.weather[0].main}</p>
                        <p className="weather-temp"><b>Looks like:</b>{weather.weather[0].description}</p>
                    </div>
                ) : (
                    <p className="not-found">Not found</p>
                ))
            )}
        </div>
    );
}




