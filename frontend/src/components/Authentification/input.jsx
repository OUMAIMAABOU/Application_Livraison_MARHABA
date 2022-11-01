import { useState } from "react";
import  axios from 'axios'

function InputLogin() {
  
  const [Data,setData]=useState({})
  const onchange = (e) => {
    setData((prevState) =>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}
const onSubmit=(e)=>{ 
  e.preventDefault()
  axios.post("http://localhost:8080/api/auth/login",Data)
  .then( (response) => {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
}
  return (
    <form onSubmit={onSubmit}>
    <div>
      <p className="mb-4">Please login to your account</p>
      <div className="mb-4">
        <input
          type="text" id="email"   placeholder="mail" name="email"  onChange={onchange}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"      
        />
      </div>
      <div className="mb-4">
        <input
          type="password" id="password" placeholder="Password" name="password"  onChange={onchange}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
         
         
        />
      </div>
      <div className="text-center pt-1 mb-12 pb-1">
        <button type="submit" className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor">
          Log in
        </button>
        <a className="text-gray-500" href="#!">
          Forgot password?
        </a>
      </div>
      <div className="flex items-center justify-between pb-6">
        <p className="mb-0 mr-2">Don't have an account?</p>
        <button
          type="button"data-mdb-ripple="true"data-mdb-ripple-color="light"
          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Danger
        </button>
      </div>
    </div>
    </form>
  );
}

export default InputLogin;




