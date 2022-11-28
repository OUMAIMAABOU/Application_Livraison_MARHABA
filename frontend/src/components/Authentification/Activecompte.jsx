import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Activecompte() {
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/auth/configiration/${params}`)
      .then((response) => {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err.response);
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
                      <img
                        className="mx-auto w-48"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-5 pb-1">
                        votre compte is active{" "}
                      </h4>
                    </div>
                    <div>
                      <p className="text-xl font-semibold mt-1 mb-5 pb-1">
                        please confirm that you want to use your account{" "}
                      </p>
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
export default Activecompte;
