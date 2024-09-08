import weatherIcons from '../../utils/weatherIcons';
import timeFormat from '../../utils/timeFormat';

export default function index({ value: { main, weather, name } }) {
  const iconTypeHandler = () => weatherIcons(weather);
  const currentTime = () => timeFormat();

  return (
    <div className='text-[#16538E]'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-xl'>
          <span className='material-symbols-outlined'>location_on</span>
          <span className='font-semibold'>{name}</span>
        </div>
        <p>Today {currentTime()}</p>
      </div>

      <div className='flex justify-center items-center py-16'>
        <img
          className='w-60'
          src={`https://openweathermap.org/img/wn/${iconTypeHandler()}@4x.png`}
          alt='cloudy day'
        />
        <div>
          <p className='text-6xl'>
            {main.temp} <span>°C</span>
          </p>
          <p className='text-2xl'>{weather[0].main}</p>
          <p>{weather[0].description}</p>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='material-symbols-outlined'>humidity_mid</span>
          <span>Humidity {main.humidity}</span>
        </div>
        <div className='flex items-center'>
          <span className='material-symbols-outlined'>device_thermostat</span>
          <span>
            Temperature {main.temp_min} °C ~ {main.temp_max} °C
          </span>
        </div>
      </div>
    </div>
  );
}
