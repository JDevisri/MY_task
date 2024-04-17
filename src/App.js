// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [category, setCategory] = useState('');


//   useEffect(() => {
//     fetch('https://api.publicapis.org/categories', {
//       method: "GET",
//     })
//       .then((resp) => {
//         resp.json().then((response) => {
//           setCategories(response.categories);
//         });
//       })
//       .catch((err) => alert(err.message ?? "Something went wrong"));
//   }, []);

//   useEffect(() => {
//     if (category) {
//       fetch(`https://api.publicapis.org/entries?Category=${category}`, {
//         method: "GET",
//       })
//         .then((resp) => {
//           resp.json().then((response) => {
//             setEntries(response.entries);
//           });
//         })
//         .catch((err) => alert(err.message ?? "Something went wrong"));
//     }
//   }, [category]);

//   return (
//     <div className="container">
//       <div className="cont">
//         <nav>
//           <ul>
//             <h1 className="heading">Public APIs</h1>
//           </ul>
//         </nav>
//         <div className="app">
//           <select value={category} onChange={(e) => setCategory(e.target.value)}>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="container1">
//         {entries.length > 0 && entries.map((item, index) => (
//           <div key={index} className="container2">
//             <div className="api"><span>API:</span> {item.API}</div>
//             <div className="description"><span>Description: </span>{item.Description}</div>
//             <div className="auth"><span>Auth:</span> {item.Auth}</div>
//             {/* <div className="https">HTTPS: {item.HTTPS}</div> */}
//             <div className="cors"><span>Cors:</span> {item.Cors}</div>
//             <div className="link">
//               <a href={item.Link} target="_blank" rel="noopener noreferrer">
//              <span>Link:</span>  {item.Link}
//               </a>
//             </div>
//             <div className="category"><span>Category: </span>{item.Category}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// //formating dates
// // import './App.css';
// // import moment from 'moment';
// // function App(){
// //   return(
// //     <div className='container'>
// //     <div>{moment(new Date()).format('ddd DD MM YYYY')}</div>
// //     <div>{moment(new Date()).format('D/M/YY')}</div>
// //     <div>{moment(new Date()).format('hh:mm A')}</div>
// //     <div>{moment(new Date()).format('hh mm ss A')}</div>
// //     <div>{moment(new Date()).format('ddd DD MM YYYY hh:mm A')}</div>
// //     </div>
// //   )
// // }
// // export default App;



// //using classcomponents
// // import React from "react";
// // import './App.css';

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       categories: [],
// //       entries: [],
// //       category: ''
// //     };
// //   }

// //   componentDidMount() {
// //     fetch('https://api.publicapis.org/categories')
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch categories');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         this.setState({ categories: data.categories });
// //       })
// //       .catch(error => {
// //         console.error('Error fetching categories:', error);
// //         alert(error.message ?? "Something went wrong");
// //       });
// //   }

// //   componentDidUpdate(prevProps, prevState) {
// //     if (this.state.category !== prevState.category) {
// //       if (this.state.category) {
// //         fetch(`https://api.publicapis.org/entries?Category=${this.state.category}`)
// //           .then(response => {
// //             if (!response.ok) {
// //               throw new Error('Failed to fetch entries');
// //             }
// //             return response.json();
// //           })
// //           .then(data => {
// //             this.setState({ entries: data.entries });
// //           })
// //           .catch(error => {
// //             console.error('Error fetching entries:', error);
// //             alert(error.message ?? "Something went wrong");
// //           });
// //       } else {
// //         this.setState({ entries: [] });
// //       }
// //     }
// //   }

// //   render() {
// //     const { categories, entries } = this.state;

// //     return (


// //       <div className="container">
// //         <div className="cont">
// //           <nav>
// //             <ul>
// //               <h1 className="heading">Public APIs</h1>
// //             </ul>
// //           </nav>
// //           <div className="app">
// //             <select value={this.state.category} onChange={(e) => this.setState({category:e.target.value})}>
// //               {categories.map((category, index) => (
// //                 <option key={index} value={category}>{category}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <div className="container1">
// //           {entries.length > 0 && entries.map((item, index) => (
// //             <div key={index} className="container2">
// //               <div className="api"><span>API:</span> {item.API}</div>
// //               <div className="description"><span>Description: </span>{item.Description}</div>
// //               <div className="auth"><span>Auth:</span> {item.Auth}</div>
// //               {/* <div className="https">HTTPS: {item.HTTPS}</div> */}
// //               <div className="cors"><span>Cors:</span> {item.Cors}</div>
// //               <div className="link"><span>Link:</span> 
// //                 <a href={item.Link} target="_blank" rel="noopener noreferrer">
// //                    {item.Link}
// //                 </a>
// //               </div>
// //               <div className="category"><span>Category: </span>{item.Category}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// // export default App;









// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [mobileNumberError, setMobileNumberError] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(firstName, lastName, mobileNumber, email, password);

//   }
//   const handleFirstName = (e) => {
//     const value = e.target.value;
//     setFirstName(value);
//     const firstnameRegex = /^[A-Za-z]{3,16}$/;
//     if (firstnameRegex.test(value))  {
//       setFirstNameError('');
//     }
//     else{
//       setFirstNameError('Invalid first name')
//     }
//   }

//   const handleLastName = (e) => {
//     const value = e.target.value;
//     setLastName(value);
//     const lastnameRegex = /^[A-Za-z]{3,16}$/;
//     if (lastnameRegex.test(value))  {
//       setLastNameError('');
//     }
//     else{
//       setLastNameError('Invalid lastst name')
//     }
//   }



//   // const mobRegex =/^(?:\+?\d{2})?[ -]?[0](?!([1-5]))(\d{10})$/;

//   const handleMobileNUmber = (e) => {
//     const value = e.target.value;
//     setMobileNumber(value);
//     const mobRegex = /^(?:(?:\+|0{0,2})91[ -]?(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
//     if (mobRegex.test(value)) {
//       setMobileNumberError('');
//     }
//     else {
//       setMobileNumberError('invalid mobile number')
//     }
//   }




//   const handleEmail = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     const emailRegex = /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
//     if (emailRegex.test(value)) {
//       setEmailError('');
//     }
//     else {
//       setEmailError('Invalid Email')
//     }
//   }




//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const weakRegex = /^.{4,}$/;

//     if (strongRegex.test(value)) {
//       setPasswordError('');
//     } else {
//       setPasswordError('Invalid Password');
//     }
//   };




//   return (
//     <form onchange={handleSubmit}>
//       <div className='App'>
//         <h1>SignUp Form</h1>
//         <div className="form-container">
//           <label htmlFor="firstname">FirstName</label>
//           <input type="text" name="firstname" placeholder="Enter your firstname" autoComplete="off"
//             onChange={handleFirstName} />
//           {firstNameError && <div className="title">{firstNameError}</div>}


//           <label htmlFor="lastname">LastName</label>
//           <input type="text" name="lastname" placeholder="Enter your lastname" autoComplete="off"
//             onChange={handleLastName} />
//           {lastNameError && <div className="title">{lastNameError}</div>}



//           <label htmlFor="mobilenumber">Mobilenumber</label>
//           <input type="text" name="mobilenumber" placeholder="Enter your mobilenumber" autoComplete="off"
//             onChange={handleMobileNUmber} />
//           {mobileNumberError && <div className="title">{mobileNumberError}</div>}

//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" placeholder="Enter your email" autoComplete="off"
//             onChange={handleEmail} />
//           {emailError && <div className="title">{emailError}</div>}

//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" placeholder="Enter your password" autoComplete="off"
//             onChange={handlePasswordChange} />
//           {passwordError && <div className="title">{passwordError}</div>}

//           <button type="submit">Submit</button>


//         </div>
//       </div>
//     </form>
//   );
// }

// export default App;




// signup form using regex
// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [mobileNumberError, setMobileNumberError] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(firstName, lastName, mobileNumber, email, password);
//   };

//   const handleFirstName = (e) => {
//     const value = e.target.value;
//     setFirstName(value);
//     const firstnameRegex = /^[A-Za-z]{3,16}$/;
//     if (firstnameRegex.test(value))  {
//       setFirstNameError('');
//     }
//     else{
//       setFirstNameError('Invalid first name')
//     }
//   };

//   const handleLastName = (e) => {
//     const value = e.target.value;
//     setLastName(value);
//     const lastnameRegex = /^[A-Za-z]{3,16}$/;
//     if (lastnameRegex.test(value))  {
//       setLastNameError('');
//     }
//     else{
//       setLastNameError('Invalid last name')
//     }
//   };

//   const handleMobileNUmber = (e) => {
//     const value = e.target.value;
//     setMobileNumber(value);
//     const mobRegex = /^(?:(?:\+|0{0,2})91[ -]?(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
//     if (mobRegex.test(value)) {
//       setMobileNumberError('');
//     }
//     else {
//       setMobileNumberError('Invalid mobile number')
//     }
//   };

//   const handleEmail = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     const emailRegex = /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
//     if (emailRegex.test(value)) {
//       setEmailError('');
//     }
//     else {
//       setEmailError('Invalid Email')
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const weakRegex = /^.{4,}$/;

//     if (strongRegex.test(value)) {
//       setPasswordError('');
//     } else {
//       setPasswordError('Invalid Password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='App'>
//         {/* <h1>SignUp Form</h1> */}
//         <div className="form-container">
//           <label htmlFor="firstname">First Name</label>
//           <input type="text" name="firstname" placeholder="Enter your firstname" autoComplete="off"
//             onChange={handleFirstName} />
//           {firstNameError && <div className="title">{firstNameError}</div>}

//           <label htmlFor="lastname">Last Name</label>
//           <input type="text" name="lastname" placeholder="Enter your lastname" autoComplete="off"
//             onChange={handleLastName} />
//           {lastNameError && <div className="title">{lastNameError}</div>}

//           <label htmlFor="mobilenumber">Mobile Number</label>
//           <input type="text" name="mobilenumber" placeholder="Enter your mobilenumber" autoComplete="off"
//             onChange={handleMobileNUmber} />
//           {mobileNumberError && <div className="title">{mobileNumberError}</div>}

//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" placeholder="Enter your email" autoComplete="off"
//             onChange={handleEmail} />
//           {emailError && <div className="title">{emailError}</div>}

//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" placeholder="Enter your password" autoComplete="off"
//             onChange={handlePasswordChange} />
//           {passwordError && <div className="title">{passwordError}</div>}

//           <button type="submit">Submit</button>
//         </div>
//       </div>
//     </form>
//   );
// }
// export default App;


// REDUX

import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserDetails from './UserDetails'
import { saveUserDetails, saveLoader, saveSnackbar } from "./redux/slice/userSlice";
import Loader from './Loader/Loader';
import Snackbars from './Snackbar/Snackbar';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(saveUserDetails("Devisri"))
        }, 3000)
    }, [dispatch]);

    useEffect(() => {
        dispatch(saveSnackbar({ visible: true, message: 'Items are Deleted' }))
        setTimeout(() => {
            dispatch(saveSnackbar({ visible: false, message: '' }))
        }, 3000)
    }, [dispatch])

    useEffect(() => {
        dispatch(saveLoader({ visible: true }))
        setTimeout(() => {
            dispatch(saveLoader({ visible: false }))
        }, 3000)
    }, [dispatch])

    return (
        <div>
            <UserDetails />
            <Snackbars />
            <Loader />
        </div>
    )
}
export default App;