import { useState,useEffect,useRef } from "react";
import {useNavigate,Link} from "react-router-dom";
import {loginUserFn} from '../../Api/Authentification.Api'
import axios from 'axios';



function InputLogin() {
  const navig=useNavigate()
  const [Data, setData] = useState({email:"",password:""});
  const refPassword=useRef()
  const refEmail=useRef()
  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState("");
  const [roles, setRole] = useState("");


  const onchange = (e) => {
    setData(() => ({
      ...Data,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (refPassword.current.value==""||refEmail.current.value=="") {
      setErrMsg("Remplir tous les champs");
      setData("");
      return;
    }
  
 axios
      .post("http://localhost:8080/api/auth/login", Data)
   .then((response) => {
        localStorage.setItem("token", response.data.token);

        setData("");
        setSucess(true);
        setRole(response.data.role)
      
        })
        .catch((err)=>{
          console.log(err)
          if (!err.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("password or email incorrect");
          } 
          else {
            setErrMsg(err);
          }
        });
  
   
  };

  useEffect(() => {
    if(sucess){
   if(roles === "Client"||roles === "Livreure"){
       navig("/home") 
      } 
      if (roles === "Manager"){
        navig("/dash") 
       }
    } 
  
   else (console.log(errMsg) )
  
},[Data]);


  return (
  
    <form onSubmit={onSubmit}>
   
            <p className="text-red-500 font-bold text-center "> {errMsg}</p>

            <p className="text-green-500 font-bold text-center ">{sucess}</p>
      <div>
        <p className="mb-4">Please login to your account</p>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="mail"
            name="email"
            onChange={onchange}
            ref={refEmail}
            className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            ref={refPassword}
            onChange={onchange}
            className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button
            type="submit"
            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor"
          >
            Log in
          </button>
          <Link to="/forgotpassword" className="text-gray-500">Forgot password?</Link>  
        
        </div>
        <div className="flex items-center justify-between pb-6">
          <p className="mb-0 mr-2">Don't have an account?</p>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
                      <Link to="/register">Danger</Link>  

            
          </button>
        </div>
      </div>
      
    </form>
    
  );
}

export default InputLogin;
