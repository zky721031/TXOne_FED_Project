import { useNavigate } from 'react-router-dom';
import NotFound from '../../assets/404-error-not-found-page-lost.png';

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center absolute inset-0 bg-white'>
      <img className='w-1/3' src={NotFound} alt='NotFound' />
      <p
        onClick={() => navigate(-1)}
        className='absolute bottom-40 text-xl border px-5 py-1 rounded bg-[#16538E] hover:bg-opacity-90 text-white'
      >
        Go back to previous page
      </p>
    </div>
  );
}
