import React from 'react'
import { useState,useEffect } from 'react';
const Customer = () => {
  const[cust,setCust]=useState([])
  const[orderOption,setorderOption ]=useState("Newest")
  const [allCustomers, setAllCustomers] = useState([]);
  
  useEffect(() => {
    const customers = [
      { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', status: 'Active', },
      { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', status: 'Inactive', },
      { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', status: 'Inactive' },
      { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', status: 'Active' },
      { name: 'Jerome Bell', company: 'Google', phone: '(615) 555-0128', email: 'jerome@google.com', status: 'Active' },
      { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(229) 555-0109', email: 'kathryn@microsoft.com', status: 'Active' },
      { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', status: 'Active' },
      { name: 'Kristin Watson', company: 'Facebook', phone: '(754) 555-0121', email: 'kristin@facebook.com', status: 'Inactive' },
    ];

    // Set the customers data to state
    setCust(customers);
    setAllCustomers(customers)
  }, []);
  const updateCust=(e)=>{
    setorderOption(e.target.value)
    let sortedCust
    if(orderOption==='Newest'){
      sortedCust=allCustomers.reverse()

    }else{
      sortedCust=allCustomers.reverse()
    }
    setCust(sortedCust)

  }
  const updateName=(e)=>{
    let cmp=e.target.value

    if (cmp === '') {
      setCust(allCustomers);
    } else {
      let filteredCustomers = allCustomers.filter((c) => c.company === cmp);
      setCust(filteredCustomers);
      
    }


  }
  const displayActive=()=>{
    let ac=allCustomers.filter((a)=>a.status==='Active')
    setCust(ac)

  }
  return (
    <div className='mt-2 rounded-lg p-4 shadow-lg bg-white'>
        <div className='flex p-4'>
            <div>
            <h1 className='font-bold'>All Customers</h1>
            <p  onClick={displayActive} className=' text-sm  cursor-pointer  text-green-500'> Active Members</p>
            </div>
            <div className='flex  items-center  mx-auto '>
                <input  placeholder='🔍    search'  onChange={updateName} className='bg-gray-100 rounded-md' /> 
                <div className='flex-end  pl-24'>
                 <label>short by</label><select onChange={updateCust} value={orderOption}  >
                    <option  value="Newest" > Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                </div>
                
            </div>
        </div>
        <div className="overflow-x-auto pt-5">
      <div className="min-w-full shadow rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-4 py-2">
          <div className="grid grid-cols-5 gap-4 text-left font-semibold">
            <div>Customer Name</div>
            <div>Company</div>
            <div>Phone Number</div>
            <div>Email</div>
            <div>Status</div>
          </div>
        </div>
        
        {cust.map((customer, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 border-b border-gray-200 bg-white hover:bg-gray-50 py-2 px-4">
            <div>{customer.name}</div>
            <div>{customer.company}</div>
            <div>{customer.phone}</div>
            <div>{customer.email}</div>
            <div className={`${customer.status === 'Active' ? 'text-green-500 bg-green-300 text-xs text-center rounded-sm w-12 p-2' : 'text-red-600  bg-red-300  text-xs w-12 p-2 rounded-sm text-center'}`}>{customer.status}</div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Customer