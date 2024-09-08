// import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar({ lists }) {
  // 依 props 傳入值來渲染
  return (
    <div>
      <ul className='bg-white h-[calc(100vh-60px)] '>
        {lists.map((each) => (
          <li key={each.key}>
            <NavLink
              to={each.link}
              className='flex items-center hover:bg-blue-50 p-3'
            >
              <span className='material-symbols-outlined text-lg mr-2'>
                {each.icon}
              </span>
              <span>{each.value}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
