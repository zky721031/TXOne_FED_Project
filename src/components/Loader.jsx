import loading from '../assets/icons/loading.svg';

export default function Loader() {
  return (
    <div className='flex justify-center items-center absolute inset-0 bg-black bg-opacity-50'>
      <img className='w-14' src={loading} alt='loading' />
    </div>
  );
}
