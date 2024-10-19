// import { useState } from "react"

// function App () {
  
//     const [num , setNum] = useState(0)
  
  
//   return (
//   <>
//   <div>
//     <p>{num}</p>
//     <button onClick={()=> setNum(num + 1)}>Add</button>
//     <button onClick={num > 0 ? ()=> setNum(num - 1) : () => setNum(0)}>Less</button>
//   </div>
//   </>
//   )
// }

// export default App



// import React, { useRef, useState } from 'react'

// const App = () => {
  
//   const [InputArray , setInputArray] = useState([])
//   // console.log(inputValue);
  
//   const inputValue = useRef()
  
  
//   const addvalue = (event)=>{
//     event.preventDefault()
//     InputArray.push (inputValue.current.value)
//     setInputArray([...InputArray])
//     inputValue.current.value = ''
//     // console.log(InputArray);
    
//   }

//   return (
//     <div>
//       <form onSubmit={addvalue}>
//         <input type="text" ref={inputValue}/>
//         <button type='submit'>submit</button>
//       </form>
//       {InputArray.length > 0 ? InputArray.map((items , index)=>{
//         return <p>Welcome Mr. / Mrs. {items}</p>
//       }):<p>no todo added yet</p>}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
  
//   const [status , setStatus] = useState(false) 
  

//   return (
//     <div>
//       <button onClick={()=> status ? setStatus(false) : setStatus(true)}>Toggle Button {status ? 'OFF' : 'ON'}</button>
//     </div>
//   )
// }

// export default App





// import React, { useState } from 'react'

// const App = () => {
  
//   const [color , setColor] = useState('black')
//   const [color2 , setColor2] = useState('black')
//   const [con , setCon] = useState (false)
//   return (
//     <>
//     <div style={{backgroundColor : color}}>
//       <p style={{ color: con ? 'black' : 'white'}}>My Name is Muhammad Talal</p>
//     </div>
//     <button style={{backgroundColor: color2}} onClick={()=>{setColor('red')
//       setCon(false)
//       setColor2('red')
//     }}>red</button>
//     <button onClick={()=>{setColor('blue')
//       setCon(false)
//     }}>blue</button>
//     <button onClick={()=>{setColor('green')
//       setCon(false)
//     }}>green</button>
//     <button onClick={()=>{setColor('black')
//       setCon(false)
//     }}>black</button>
//     <button onClick={()=>{
//       setColor('white')
//       setCon(true)
//       }}>white</button>
//     </>
    
//   )
// }

// export default App




// import React, { useRef, useState } from 'react'


// const App = () => {
  
//   const inputValue = useRef()
//   // const [count , setCount] = useState(0)
//   const [count , setCount] = useState(0)
  
//   const characterCounter = (event)=>{
//     event.preventDefault()
//     // console.log (inputValue.current.value)
//     const input = inputValue.current.value
//     setCount(input.replaceAll(' ', '').length)
//     inputValue.current.value = ''
//   }


//   return (
//     <>
//     <div>
//       <form onSubmit={characterCounter}>
//         <input type="text" ref={inputValue}/>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//     <p>{count}</p>
//     </>
    
    
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
  
//   const [num , setNum] = useState(0)
//   const previousImg = ()=>{
//     setNum(prevNum => prevNum > 0 && prevNum <= 2 ? prevNum - 1 : 0)
//     console.log (num)
  
//   }
//   const nextImg = ()=>{
//     // console.log ('next chala')
//     setNum(prevNum => prevNum < 2 && prevNum >= 0 ? prevNum + 1 : 2)
//     // num >=0 && num < 2 ? setNum(num + 1) : setNum(2)
//     console.log (num)
//   }

//   return (
//     <>
//     <div className='d-flex justify-content-center align-items-center'>
//       <div onClick={previousImg}>PREVIOUS</div>
//       <img width='300px' height='300px' src={num === 0 ? 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' : num === 1 ? 'https://w0.peakpx.com/wallpaper/256/602/HD-wallpaper-special-flower-nature-lover-sudheer-pics-spring-blossom-thumbnail.jpg' : 'https://images.pexels.com/photos/19557055/pexels-photo-19557055/free-photo-of-snowy-peak-of-the-pic-du-midi-dossau-mountain.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="logo" />
//       <div onClick={nextImg}>NEXT</div>
//     </div>
//     </>
//   )
// }
// export default App




// import React, { useState } from 'react';

// const Dropdown = ({ options }) => {
//   const [selectedValue, setSelectedValue] = useState('');  // State to track the selected option

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);  // Update the state with the selected option
//     console.log('Selected:', event.target.value);  // Log the selected value for demonstration
//   };

//   return (
//     <div>
//       <label htmlFor="dynamic-dropdown">Choose an option: </label>
//       <select id="dynamic-dropdown" value={selectedValue} onChange={handleChange}>
//         <option value="">--Select an option--</option>  {/* Default "placeholder" option */}
//         {options.map((option, index) => (  // Dynamically render options
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>

//       {/* Display the selected value */}
//       {selectedValue && <p>You selected: {selectedValue}</p>}
//     </div>
//   );
// };

// // Example usage of the Dropdown component
// const App = () => {
//   const options = ['Apple', 'Banana', 'Orange', 'Grapes'];  // Example options

//   return (
//     <div>
//       <h1>Dynamic Dropdown</h1>
//       <Dropdown options={options} />  {/* Pass options to the dropdown as a prop */}
//     </div>
//   );
// };

// export default App;






// import React from 'react'
// import { useState } from 'react';
// const App = () => {
  
//   const countriesWithCities = [
//     {
//       country: "United States",
//       cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
//     },
//     {
//       country: "Canada",
//       cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
//     },
//     {
//       country: "United Kingdom",
//       cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"],
//     },
//     {
//       country: "Australia",
//       cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
//     },
//     {
//       country: "India",
//       cities: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"],
//     },
//     {
//       country: "Germany",
//       cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
//     },
//     {
//       country: "France",
//       cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
//     },
//     {
//       country: "Brazil",
//       cities: ["São Paulo", "Rio de Janeiro", "Salvador", "Brasília", "Fortaleza"],
//     },
//     {
//       country: "Japan",
//       cities: ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo"],
//     },
//     {
//       country: "Russia",
//       cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"],
//     },
//   ];
  
//   const [selCountry , setCountry] = useState()
//   let [filteredArray , setfilteredAray] = useState([])

//   const optionSelect = (event)=> {
//     // console.log (event.target.value)
//     setCountry (event.target.value)
//     const findObject = countriesWithCities.find ((items)=> items.country === event.target.value)
//     // console.log (findObject)
//     setfilteredAray(findObject.cities)
//     // console.log (filteredArray)
//   }


//   return (
//     <>
//     <div>
//       <select value={selCountry} onChange={optionSelect}>
//         <option value="Select an option" key={100}>Select an Option</option>
//         {countriesWithCities.map ((items , index) =>{ 
//           return <option value={items.country} key={index}>{items.country}</option>
//         })}
//       </select>
//     </div>
//     <div>
//       <h1>Name of cities:</h1>
//       {filteredArray.length > 0 ? filteredArray.map ((items , index) => {return <p>{items}</p>} ) : <p>Please select a country</p>}
//     </div>
//     </>
// )}

// export default App


// import React, { useRef, useState } from 'react'

// const App = () => {
    
//     const [user , setUser] = useState('')
//     const username = useRef()
//     const password = useRef()
//     const obj = {
//         name: 'Talal' ,
//         passowrd: 'tak90'
//     }
    
//     const submitAction = (event)=>{
//         event.preventDefault()
//         username.current.value === obj.name && password.current.value === obj.passowrd ? setUser('Login Successful') : setUser('Wrong ID or Password')
//         username.current.value = ''
//         password.current.value = ''
//     }
  
  
  
//     return (
//     <>
//     <div>
//         <form onSubmit={submitAction}>
//             <label htmlFor="username">Username</label> &nbsp;
//             <input type="text" id="username" ref={username}/>
//             <br />
//             <br />
//             <label htmlFor="password">Password</label> &nbsp;
//             <input type="password" id="password" ref={password}/>
//             <br />
//             <br />
//             <button type='submit'>Login</button>
//         </form>
//         <div>
//             <p>{user}</p>
//         </div>
//     </div>
//     </>
    
// )
// }

// export default App


import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample data for demonstration
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  // Get the current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Render the Pagination Component */}
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={data.length} 
        paginate={paginate} 
      />
    </div>
  );
};

export default App;
