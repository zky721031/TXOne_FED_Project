import { forwardRef } from 'react';

const InputComp = forwardRef((props, ref) => (
  <div className='flex items-center gap-2'>
    <label className='text-custom-blue'>{props.label}</label>
    <input
      className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-custom-blue focus:border-custom-blue w-full p-2 bg-white'
      type='search'
      ref={ref}
    />
  </div>
));

InputComp.displayName = 'InputComponent';

export default InputComp;
