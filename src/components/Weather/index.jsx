import { Fragment, useState, useEffect, useRef } from 'react';
import { http } from '../../utils';

import InputComp from '../../components/Input';
import ButtonComp from '../../components/Button';
import LoaderComp from '../../components/Loader';
import WeatherDetail from '../WeatherDetail';

const API_KEY = '2f8cc5bd6e6e28559612ad3628f870c4';

export default function WeatherComponent({ city, country }) {
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const [errorTip, setErrorTip] = useState(false);

  const cityRef = useRef(null);
  const countryRef = useRef(null);

  const fetchData = async (url) => {
    setLoader(true);
    try {
      const { data } = await http.get(url);
      setWeatherInfo(() => data);
      setLoading(true);
      setErrorTip(false);
    } catch (err) {
      setWeatherInfo(null);
      setErrorTip(true);
      console.log(err.response.data);
    }
    setLoader(false);
  };

  const searchHandler = () => {
    // 1、取得input值
    let cityName = cityRef.current.value;
    let countryName = countryRef.current.value;
    // 2、如果input沒有值，則return
    if (!cityName || !countryName) {
      setErrorTip(true);
      return;
    }
    // 3、send request
    let url = `/data/2.5/weather?q=${cityName},${countryName}&units=metric&appid=${API_KEY}`;
    fetchData(url);
  };

  useEffect(() => {
    // 第一次渲染預設值
    cityRef.current.value = city;
    countryRef.current.value = country;
    const url = `/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;
    fetchData(url);
  }, []);

  return (
    <Fragment>
      <div className='grid grid-cols-5 gap-5 mb-5'>
        <div className='col-span-2'>
          <InputComp ref={cityRef} label={'City'} />
        </div>
        <div className='col-span-2'>
          <InputComp ref={countryRef} label={'Country'} />
        </div>
        <div className='col-span-1'>
          <ButtonComp clickMethod={searchHandler} />
        </div>
      </div>

      {errorTip && (
        <p className='text-red-400 mb-5 pl-10'>Not found the city or country</p>
      )}

      {loading && (
        <div className='border rounded-lg bg-white p-5 relative overflow-hidden'>
          {loader && <LoaderComp />}
          {weatherInfo ? (
            <WeatherDetail value={weatherInfo} />
          ) : (
            <p className='flex justify-center items-center py-44'>No Data</p>
          )}
        </div>
      )}
    </Fragment>
  );
}
