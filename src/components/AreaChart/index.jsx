import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

export default function ChartComponent({ data }) {
  return (
    <div className='bg-white p-8'>
      <h6 className='font-medium mb-5'>Area Chart</h6>
      <ResponsiveContainer width='100%' height={400}>
        <AreaChart width={500} height={400} data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='Men'
            fill='#80B4FF'
            stroke='#80B4FF'
            stackId='1'
          ></Area>
          <Area
            type='monotone'
            dataKey='Female'
            fill='#E86997'
            stroke='#E86997'
            stackId='1'
          ></Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
