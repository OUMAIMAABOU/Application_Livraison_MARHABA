// import { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import {useNavigate,Navigate } from "react-router-dom";


// // import axios from "axios";

// function InputLogin() {
//   const navig=useNavigate()
//   const [Data, setData] = useState({email:"",password:""});
//   const [errMsg, setErrMsg] = useState("");
//   const [sucess, setSucess] = useState("");
//   const [roles, setRole] = useState("");


//   const onchange = (e) => {
//     setData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/api/auth/login", Data)
//       .then((response) => {
//         localStorage.setItem("token", response.data.token);

//         setData("");
//         setSucess(true);
//         setRole(response.data.role)
      
//         })
//         .catch(function (err) {
// console.log(err.response)
//           if (!err.response) {
//             setErrMsg("No Server Response");
//           } else if (err.response?.status === 400) {
//             setErrMsg("password or email incorrect");
//           } 
//           // else {
//           //   setErrMsg("login Failed");
//           // } 
//           else {
//             setErrMsg(err);
//           }
//         });
//   };

//   useEffect(() => {
//     if(sucess){
//    if(roles === "Client"){
//        navig("/home") 
//       } 
//       if (roles === "Manager"){
//         navig("/dash") 
//        }
//     } 
  
//    else (console.log('err') )
  
// },[Data]);


//   return (
  
//     <form onSubmit={onSubmit}>
   
//             <p className="text-red-500 font-bold text-center "> {errMsg}</p>

//             <p className="text-green-500 font-bold text-center ">{sucess}</p>
//       <div>
//         <p className="mb-4">Please login to your account</p>
//         <div className="mb-4">
//           <input
//             type="text"
//             id="name"
//             placeholder="mail"
//             name="email"
//             onChange={onchange}
//             className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             name="password"
//             onChange={onchange}
//             className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//           />
//         </div>
//         <div className="text-center pt-1 mb-12 pb-1">
//           <button
//             type="submit"
//             className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor"
//           >
//             Log in
//           </button>
//           <a className="text-gray-500" href="#!">
//             Forgot password?
//           </a>
//         </div>
//         <div className="flex items-center justify-between pb-6">
//           <p className="mb-0 mr-2">Don't have an account?</p>
//           <button
//             type="button"
//             data-mdb-ripple="true"
//             data-mdb-ripple-color="light"
//             className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//           >
//             Danger
//           </button>
//         </div>
//       </div>
      
//     </form>
    
//   );
// }



// function InpuRegister() {
//   const EMAIL_REGEX = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/;

//   const errRef = useRef();
//   // const userRef=useRef()

//   const [Data, setData] = useState("");
//   // [name,email,password,address]=Data
//   const [matchPwd, setMatchPwd] = useState("");
//   const [pwd, setPwd] = useState("");

//   const [validemail, setValidemail] = useState(false);
//   // const [userFocus,setUserFocus]=useState(false)

//   const [errMsg, setErrMsg] = useState("");

//   const [sucess, setSucess] = useState(false);

//   // useEffect(()=>{
//   //   userRef.current.focus()
//   // },[])

//   // useEffect(() => {
//   //   setErrMsg("");
//   //   console.log('im here')
//   // }, [Data]);

//   const onchange = (e) => {
//     setData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!Data) {
//       setErrMsg("Remplir tous les champs");
//       setData("");
//       return;
//     }
//     // if (!setValidemail(EMAIL_REGEX.test(validemail))) {
//     //   setErrMsg("invalid email");
//     //   return;
//     // }
//     try {
//       axios
//         .post("http://localhost:8080/api/auth/register", Data)
//         .then((response) => {
//           // sucess(response)
//           console.log(response);
//           setSucess("bien ajouter");
//           setData("");
//         })
//         .catch(function (err) {
//           if (!err.response) {
//             setErrMsg("No Server Response");
//           } else if (err.response?.status === 400) {
//             setErrMsg("email already exists");
//           } else {
//             setErrMsg("Registration Failed");
//           }
//         });
//     } catch (err) {}
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         {sucess ? (
//           <section>
           
//              <Navigate to='/verification'/>
//           </section>
//         ) : (
//           <section>
//             <p className="text-red-500 font-bold text-center "> {errMsg}</p>

//             <p className="text-green-500 font-bold text-center ">{sucess}</p>

//             <div>
//               <p className="mb-4">Please create your account</p>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Username"
//                   onChange={onchange}
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="mail"
//                   onChange={onchange}
//                   aria-invalid={validemail ? "false" : "true"}
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   onChange={onchange}
//                   placeholder="address"
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   onChange={onchange}
//                   placeholder="phone Number"
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               {/* <div className="mb-4">
//                 <select
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                   name="roleid"
//                   id="role"
//                   onChange={onchange}
//                 >
//                   <option value="" >--Please choose an option--</option>
//                   <option value="6357b165f7dbe3fbe0e71f45">Manager</option>
//                   <option value="6357b165f7dbe3fbe0e71f47">Client</option>
//                   <option value="6357b165f7dbe3fbe0e71f46">Livreure</option>
//                 </select>
//               </div> */}
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   onChange={onchange}
//                   placeholder="Password"
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="password"
//                   id="matchPwd"
//                   name="matchPwd"
//                   onChange={onchange}
//                   placeholder="Password"
//                   className="form-control w-full px-3 py-1.5 font-normal text-gray-700 bg-white border border-solid border-gray-300"
//                 />
//               </div>
//               <div className="text-center pt-1 mb-12 pb-1">
//                 <button
//                   type="submit"
//                   className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor"
//                 >
//                   Log in
//                 </button>
//               </div>
//               <div className="flex items-center justify-between pb-6"></div>
//             </div>
//           </section>
//         )}
//       </form>
//     </>
//   );
// }



// export default {InputLogin,InpuRegister};
