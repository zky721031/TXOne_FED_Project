export default function Button({ clickMethod }) {
  return (
    <button
      onClick={clickMethod}
      className='w-full py-1.5 rounded bg-[#16538E] hover:bg-opacity-90 text-white'
      type='button'
    >
      Search
    </button>
  );
}
