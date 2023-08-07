import { useState } from "react";

const Form = (props) => {
    const [city, setCity] = useState('')

    const getWeather = (city) => {
        props.getWeather(city.trim())
        setCity('')
    }
        return ( <div>
        <h1>Получение погоды</h1>
        <form>
            <input placeholder="Введите город" value={city}
                onChange={e => setCity(e.target.value)} />
            <button type="button" onClick={() => getWeather(city)}>Получить</button>
        </form>
    </div>)
}

export default Form;