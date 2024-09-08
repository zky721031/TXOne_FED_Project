// https://openweathermap.org/weather-conditions
const iconTypeHandler = (weather) => {
  if (weather[0].description === 'clear sky') return '01d';
  if (weather[0].description === 'few clouds') return '02d';
  if (weather[0].description === 'scattered clouds') return '03d';
  if (weather[0].description === 'broken clouds') return '04d';
  if (weather[0].description === 'shower rain') return '09d';
  if (weather[0].description === 'rain') return '10d';
  if (weather[0].description === 'thunderstorm') return '01d';
  if (weather[0].description === 'snow') return '13d';
  if (weather[0].description === 'mist') return '50d';

  if (weather[0].description.includes('thunderstorm')) return '11d';
  if (weather[0].description.includes('drizzle')) return '09d';

  if (weather[0].description === 'light rain') return '10d';
  if (weather[0].description === 'moderate rain') return '10d';
  if (weather[0].description === 'heavy intensity rain') return '10d';
  if (weather[0].description === 'very heavy rain') return '10d';
  if (weather[0].description === 'extreme rain') return '10d';

  if (weather[0].description === 'freezing rain') return '13d';

  if (weather[0].description === 'light intensity shower rain') return '09d';
  if (weather[0].description === 'shower rain') return '09d';
  if (weather[0].description === 'heavy intensity shower rain') return '09d';
  if (weather[0].description === 'ragged shower rain') return '09d';

  if (weather[0].description.includes('snow')) return '13d';
  if (weather[0].description.includes('sleet')) return '13d';

  if (weather[0].description === 'mist') return '50d';
  if (weather[0].description === 'smoke') return '50d';
  if (weather[0].description === 'haze') return '50d';
  if (weather[0].description === 'sand/dust whirls') return '50d';
  if (weather[0].description === 'fog') return '50d';
  if (weather[0].description === 'sand') return '50d';
  if (weather[0].description === 'dust') return '50d';
  if (weather[0].description === 'volcanic ash') return '50d';
  if (weather[0].description === 'squalls') return '50d';
  if (weather[0].description === 'tornado') return '50d';

  if (weather[0].description.includes('few clouds')) return '02d';
  if (weather[0].description.includes('scattered clouds')) return '03d';
  if (weather[0].description.includes('broken clouds')) return '04d';
  if (weather[0].description.includes('overcast clouds')) return '04d';
};

export default iconTypeHandler;
