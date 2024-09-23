import React from 'react';

const Sidebar = () => {
  return (
    <div className='shadow-lg bg-white p-5 w-48 min-h-screen'>
      <div className='flex items-center '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP9fy5-QNpKRSWAtMw1WqC4twnkQyJbaXjA&s' alt='das' className='h-3'/>
      <h1 className=' font-bold pl-1' >Dashboard</h1>
      <p className='text-sm'>v.1</p>
      </div>
      <div className=' mt-7'>
        <div className='flex items-center'>
          <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYMWcRjwwHPSNpTXfD-C9Y0mqMzx3VxhlWg&s" alt='dashboard' /> 
          <p className='ml-2'>Dashboard            <span className='ml-8'>&gt;</span></p>
        </div>

        <div className='flex items-center mt-6'>
          <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3nE-EgOgP8K6Iyto_FdiZkURwEcOU5iWvw&s" alt='product' /> 
          <p className='ml-2'>Product <span className='ml-12'>&gt;</span> </p>
        </div>

        <div className='flex items-center text-white bg-violet-800 rounded-md  mt-6'>
          <img className='w-4' src="https://www.shutterstock.com/image-vector/customer-icon-element-simple-web-260nw-1090716302.jpg" alt='customers' /> 
          <p className='ml-2'>Customers <span className='ml-7'>&gt;</span> </p>
        </div>

        <div className='flex items-center mt-6'>
          <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZNe6vefGXh_jt_y3NS5siBFEbfYtmOi-nA&s" alt='income' /> 
          <p className='ml-2'>Income <span className='ml-12'>&gt;</span> </p>
        </div>

        <div className='flex items-center mt-6'>
          <img className='w-4' src="https://via.placeholder.com/20" alt='promote' /> 
          <p className='ml-2'>Promote <span className='ml-9'>&gt;</span> </p>
        </div>

        <div className='flex items-center mt-6'>
          <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYMWcRjwwHPSNpTXfD-C9Y0mqMzx3VxhlWg&s" alt='help' /> 
          <p className='ml-2'>Help <span className='pl-12'>&gt;</span> </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
