import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

export default function ChartComponent({ data }) {
  return (
    <div className='bg-white p-8'>
      <h6 className='font-medium mb-5'>Bar Chart</h6>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart width={500} height={400} data={data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='Men' fill='#80B4FF'></Bar>
          <Bar dataKey='Female' fill='#E86997'></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
