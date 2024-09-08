import './App.scss';
import AppStore from './AppStore';
import MRouter from './router';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function App() {
  // lists 以不同身分別來賦予值，再以 props 傳給 Sidebar Component
  const lists = [
    { key: 1, value: "Today's Weather", icon: 'wb_sunny', link: '/weather' },
    { key: 2, value: 'Population', icon: 'bar_chart', link: '/chart' },
  ];

  return (
    <AppStore>
      <Header />
      <div className='grid grid-cols-[280px_1fr] bg-gray-50'>
        <Sidebar lists={lists} />
        <MRouter />
      </div>
    </AppStore>
  );
}
