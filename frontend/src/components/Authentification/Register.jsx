// import Input from "./input";
import { useState,useRef,useEffect } from "react";
import  axios from 'axios'

const EMAIL_REGEX=/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/
function Register() {
  const errRef=useRef()
  // const userRef=useRef()

  const [Data,setData]=useState('')
  // const [validemail,setValidemail]=useState(false)
  // const [userFocus,setUserFocus]=useState(false)

  const [errMsg,setErrMsg]=useState('')

  const [sucess,setSucess]=useState(false)

  // useEffect(()=>{
  //   userRef.current.focus()
  // },[])

  // useEffect(() => {
  //   setErrMsg("");
  //   console.log('im here')
  // }, [Data]);




      const onchange = (e) => {
        setData((prevState) =>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit=(e)=>{ 
      e.preventDefault()
      if (!Data) {
        setErrMsg("Remplir tous les champs");
        setData("");
        return;
      }
      // if (!EMAIL_REGEX.test(Data)) {
      //   setErrMsg("invalid email");
      //   return;
      // }
      try {
       
        axios.post("http://localhost:8080/api/auth/register",Data)
      .then( (response) => {
        // sucess(response)
        console.log(response);
        setSucess("bien ajouter");
        setData("");

      })
      .catch(function (err) {
      
        setErrMsg(err.message);
      });
        
      
      } catch (err) {
      
        if (!err.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registration Failed");
        }
        errRef.current.focus();
      }
      
    }
  return (
    <>
    <section>
      
    <div className="App">
      <header className="App-header">
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
          <div className="container-fluid py-20 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="xl:w-10/12">
                <div className="block bg-white shadow-lg rounded-lg">
                  <div className="lg:flex lg:flex-wrap g-0">
                    <div className="lg:w-6/12 px-4 md:px-0">
                      <div className="md:p-12 md:mx-6">
                        <div className="text-center">
                          <img
                            className="mx-auto w-48"
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo"
                          />
                          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                            We are The Lotus Team
                          </h4>
                        </div>
                        <form onSubmit={onSubmit}>
                    
                        <p className="text-red-500 font-bold text-center ">{errMsg}</p>
                        <p className="text-green-500 font-bold text-center ">{sucess}</p>

                        <div>
                          <p className="mb-4">Please create your account</p>
                          <div className="mb-4">
                            <input type="text" id="name" name="name" placeholder="Username" onChange={onchange} 

                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                              
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="email" id="email" name="email" placeholder="mail" onChange={onchange} 
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"                            
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="text"id="address" name="address" placeholder="address"onChange={onchange} 
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                          </div>
                          <div className="mb-4">
                            <input
                              type="text" id="phoneNumber" name ="phoneNumber"placeholder="phone Number"onChange={onchange} 
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              
                            />
                          </div>
                          <div className="mb-4">                        
                            <select name="roleid" id="role">
                                <option value="">--Please choose an option--</option>
                                <option value="6357b165f7dbe3fbe0e71f45">Manager</option>
                                <option value="6357b165f7dbe3fbe0e71f47">Client</option>
                                <option value="6357b165f7dbe3fbe0e71f46">Livreure</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"id="password" name="password" onChange={onchange}placeholder="Password"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              
                            />
                          </div>
                          <div className="text-center pt-1 mb-12 pb-1">
                            <button type="submit" className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor">
                              Log in
                            </button>
                          </div>
                          <div className="flex items-center justify-between pb-6">
                          </div>
                        </div>
                        
                        </form>
                        
                      </div>
                    </div>
                    <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none btncolor ">
                      <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                        <h4 className="text-xl font-semibold mb-6">
                          We are more than just a company
                        </h4>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
    </section>
    </>
   
  );
}

export default Register;
