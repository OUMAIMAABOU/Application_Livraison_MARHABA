import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setuser] = useState({});
  axios.get("http://localhost:8080/api/auth/manager/me").then((resp) => {
    setuser({
      username: resp.data.username,
      email: resp.data.email,
      role: resp.data.role,
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
          <div className="container-fluid py-20 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mt-1 mb-5 pb-1">
                      <div className="mt-8 ">
        <h2 class=" font-bold text-2xl tracking-wide">
        <p className="text-center">{user.username} </p>  
        <p className="text-center"> {user.email}</p>
        </h2>
        <p className="text-emerald-400 font-semibold mt-2.5 text-2xl text-center">{user.role}</p>

      </div>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
export default Dashboard;
