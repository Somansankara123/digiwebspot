import Customer from './Customer'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <Sidebar />
        </div>

        <div className='col-span-9 p-10 '>
          <div className='flex p-2 '>
          <h1 className='text-2xl font-semibold'>Hello Evans 🖐️</h1>

          <input
            type='text '
            className='rounded-lg p-2  ml-auto  w-0.5/3 shadow-sm border-gray-300'
            placeholder=' 🔍 Search...'
            aria-label='Search'
          />
          </div>

          <div className='flex  w-5/5 pb-4 pt-5 bg-white shadow-lg rounded-lg mt-5'>
            
            <div className='text-center flex'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14FgcWINEJxuZiW_ixTn7mB4kWcK6m2Twbw&s'
                className='mt-2 pl-3 w-23 h-14 mx-auto'
                alt='Customer Icon'
              />
              <div className='ml-2'>
              <p className='font-medium text-gray-500 mt-2'>Total Customers</p>
              <p className=' text-2xl font-bold'>5,423</p>
              <p >
                <span className=' mx-2 text-green-500'>   ↑16%</span>this month
              </p>
              </div>
            </div>

            
            <div className=' ml-32 text-center flex'>
              <img
                src='https://cdn-icons-png.freepik.com/512/8810/8810110.png'
                className='h-12 mt-4'
                alt='Member Icon'
              />
              <div>
              <p className='font-medium text-gray-500 mt-2'>Total Members</p>
              <h1 className='text-2xl font-bold'>1,893</h1>
              <p >
                <span className='text-red-500'>↑ 1%</span> this month
              </p>
              </div>
            </div>

            
            <div className='flex ml-48 items-center'>
              
  
  <img
    src='https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-vert.png'
    className='w-10 h-11 mr-4'
    alt='Active Icon'
  />
  
  
  <div>
    <p className='font-medium text-gray-500'>Active Now</p>
    <h1 className='text-2xl font-bold'>189</h1>

    
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEfeLY5tWg0z3jIkT-xkMvhm-pef1mbqlsA&s' alt='group' className=' h-6' />
     </div>
     
</div>

          </div>

          
          <Customer />
          <div className='flex bg-white' >
            <div className='mt-6  ml-4'>
            <p>showing data 1 to 8 of 256k entries</p>
          </div>
          <div className=" ml-auto mt-4 items-end space-x-2">
  
  <button
    className="px-3 py-2 bg-gray-200 text-gray-600 rounded-l-lg hover:bg-gray-300"
    disabled
  >
    &lt;
  </button>

  <button className="px-3 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300">1</button>
  <button className="px-3 py-2 bg-blue-500 text-white hover:bg-blue-600">2</button>
  <button className="px-3 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300">3</button>
  <button className="px-3 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300">4</button>

  
  <button className="px-3 py-2 bg-gray-200 text-gray-600 rounded-r-lg hover:bg-gray-300">
    &gt;
  </button>
</div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
