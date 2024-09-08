import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function ChartComponent({ data }) {
  return (
    <div className='bg-white p-8'>
      <h6 className='font-medium mb-5'>Line Chart</h6>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='Men'
            stroke='#80B4FF'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='Female' stroke='#E86997' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
