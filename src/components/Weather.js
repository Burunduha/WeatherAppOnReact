import City from './City'

const Weather = (props) => {

    const data = props.cities.length ===0 ?
    (<p>Пока еще нет городов</p>) : (<div>
            {props.cities.map(el => (
                <City deleteWeather={props.deleteWeather} key={el.name} city={el}/>
            ))}
        </div>
    )

    return (
        <div>
            <h2>Все города</h2>
            {data}
        </div>
    )
}

export default Weather