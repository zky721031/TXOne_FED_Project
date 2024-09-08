// import { useState } from 'react';
import Weather from '../../components/Weather';

export default function WeatherPage() {
  return (
    <div className='p-10'>
      <h3 className='text-4xl font-semibold mb-5'>Today's Weather</h3>
      <div className='grid grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <Weather city={'taipei'} country={'tw'} />
        </div>
        <div className='col-span-1'>
          <Weather city={'keelung'} country={'tw'} />
        </div>
      </div>
    </div>
  );
}
