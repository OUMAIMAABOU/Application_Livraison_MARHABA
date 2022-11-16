import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {Navigate } from "react-router-dom";


function InpuRegister() {
  const EMAIL_REGEX = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/;

  const errRef = useRef();
  const [Data, setData] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState(false);
  const refPassword=useRef()
  const refCpassword=useRef()
  const refEmail=useRef()
  const refName=useRef()
  const refPhone=useRef()

  const onchange = (e) => {
    setData(() => ({
      ...Data,
      [e.target.name]: e.target.value,
    }));   
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // if (refPassword.current.value==""||refEmail.current.value==""||refCpassword.current.value==""||refPhone.current.value=="") {
    //   setErrMsg("Remplir tous les champs");
    //   setData("");
    //   return;
    // }
    // if (refPassword.current.value != refCpassword.current.value) {
    //   setErrMsg("invalid email");
    //   setData("");
    //   return;
    // }
    // if (EMAIL_REGEX.test(refEmail.current.value)) {
    //   setErrMsg("invalid password");
    //   setData("");
    //   return;
    // }
      axios
        .post("http://localhost:8080/api/auth/register",Data)
        .then((response) => {
          // sucess(response)
          console.log(response);
          setSucess("bien ajouter");
          setData("");
        })
        .catch(function (err) {
          console.log(err)
          if (!err.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("email already exists");
          } else {
            setErrMsg("Registration Failed");
          }
        });
    
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        {sucess ? (
          <section>
           
             <Navigate to='/verification'/>
          </section>
        ) : (
          <section>
            <p className="text-red-500 font-bold text-center "> {errMsg}</p>

            <p className="text-green-500 font-bold text-center ">{sucess}</p>

            <div>
              <p className="mb-4">Please create your account</p>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  onChange={onchange}
                  ref={refName}
                  className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="mail"
                  onChange={onchange}
                  ref={refEmail}
                  className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  onChange={onchange}
                  placeholder="address"
                  className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={onchange}
                  ref={refPhone}
                  placeholder="phone Number"
                  className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                />
              </div>
             
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  onChange={onchange}
                  ref={refPassword}
                  placeholder="Password"
                  className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="Cpassword"
                  onChange={onchange}
                  ref={refCpassword}
                  placeholder="C Password"
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
              </div>
              <div className="flex items-center justify-between pb-6"></div>
            </div>
          </section>
        )}
      </form>
    </>
  );
}

export default InpuRegister;
