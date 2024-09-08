// import React from 'react'
import LineChart from '../../components/LineChart';
import AreaChart from '../../components/AreaChart';
import BarChart from '../../components/BarChart';

const DATA = [
  {
    name: '2015',
    Men: 104752,
    Female: 96771,
    amt: 96771,
  },
  {
    name: '2016',
    Men: 102046,
    Female: 94827,
    amt: 2210,
  },
  {
    name: '2017',
    Men: 95090,
    Female: 88352,
    amt: 2290,
  },
  {
    name: '2018',
    Men: 88146,
    Female: 82426,
    amt: 2000,
  },
  {
    name: '2019',
    Men: 87291,
    Female: 80920,
    amt: 2181,
  },
  {
    name: '2020',
    Men: 81634,
    Female: 75673,
    amt: 2500,
  },
  {
    name: '2021',
    Men: 77117,
    Female: 72201,
    amt: 2100,
  },
  {
    name: '2022',
    Men: 68164,
    Female: 63444,
    amt: 2100,
  },
];
export default function ChartPage() {
  // 範例以靜態資料顯示
  // DATA 可由ajax動態取得資料，再以props，將資料往下傳遞
  return (
    <div className='p-10'>
      <h3 className='text-4xl font-semibold mb-5'>Population</h3>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <LineChart data={DATA} />
        </div>
        <div className='col-span-1'>
          <AreaChart data={DATA} />
        </div>
        <div className='col-span-1'>
          <BarChart data={DATA} />
        </div>
      </div>
    </div>
  );
}
