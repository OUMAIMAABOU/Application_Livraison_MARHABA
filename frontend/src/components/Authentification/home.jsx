import { useState } from "react";
import axios from "axios";

function Home() {
  const [user, setuser] = useState({});
  axios.get("http://localhost:8080/api/auth/client/me").then((resp) => {
    setuser({
      username: resp.data.username,
      email: resp.data.email,
      role: resp.data.role,
    });
  });
  return (
    <section class="mt-20 w-3/12 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div className="flex items-center justify-between">
        
      </div>
      <div className="mt-6 w-fit mx-auto">
        <img
          className="rounded-full w-28"
          src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
          alt="profile picture"
        />
      </div>
      <div className="mt-8 ">
        <h2 class="text-white font-bold text-2xl tracking-wide">
        <p className="text-center">{user.username} </p>  
        <p className="text-center"> {user.email}</p>
        </h2>
      </div>
      <p className="text-emerald-400 font-semibold mt-2.5 text-2xl text-center">{user.role}</p>

      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
      </div>
      
    </section>
  );
}
export default Home;
