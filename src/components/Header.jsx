// import React from 'react';

export default function Header() {
  return (
    <div className='flex justify-between p-4 shadow'>
      <div className='flex items-center'>
        <span className='material-symbols-outlined mr-1'>
          signal_cellular_alt
        </span>
        <span className='text-lg'>Analysis.dev</span>
      </div>
      <div className='flex items-center'>
        <span className='material-symbols-outlined mr-1'>account_circle</span>
        <span className='mr-1'>username</span>
        <span className='material-symbols-outlined text-base'>
          keyboard_arrow_down
        </span>
      </div>
    </div>
  );
}
