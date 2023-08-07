import { useState } from 'react';
import Form from './components/Form'
import Weather from './components/Weather';
import sun from './img/sun.svg'
import axios from 'axios'

const App = () => {
    const [cities, setCities] = useState([
        
    ])

    const getWeather = (city) => {
        if(city === '') return

        const API = 'd4d81dd881222e22d66bf432f6165c7d'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        
        axios.get(url)
        .then(res => {
            setCities(cities => [{
                name: city,
                temp: res.data.main.temp,
                feels: res.data.main.feels_like
            }, ...cities])
        })
        .catch(err => console.log(err))
    }

    const deleteWeather = (city) => {
        const newCities = cities.filter(el => {
            return el.name !== city
        })
        setCities(newCities)
    }

    return ( <div className='main'>
        <img src={sun} className='sun' />
        <Form  getWeather={getWeather}/>
        <Weather cities={cities} deleteWeather={deleteWeather}/>
        
    </div>)
}

export default App;