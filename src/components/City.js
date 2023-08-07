import sun from '../img/only-sun.svg'
import clouds from '../img/clouds.svg'

const City = (props) => {
    return (<div className="city">
        <h3>{props.city.name}</h3>
        <p>Температура: {props.city.temp} </p>
        <p>Ощущается: {props.city.feels}</p>
        {props.city.temp >= 10 && <img src={sun} />}
        {props.city.temp < 10 && <img src={clouds} />}
        <button onClick={() => props.deleteWeather(props.city.name)}>Удалить</button>
    </div>)
}

export default City;