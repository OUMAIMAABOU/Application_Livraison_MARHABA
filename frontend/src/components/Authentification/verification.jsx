
function Verification() {
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
                          verify your Email address
                        </h4>
                      </div>
                      <div>
                        <p className="text-xl font-semibold mt-1 mb-5 pb-1">please confirm that you want to use your account </p>
                        <a
                          href="https://mail.google.com/mail/u/0/#inbox"
                          className="inline-block px-6 py-2.5 text-white font-medium text-center leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 btncolor"
                        >
                          Verfiy my email
                        </a>
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
export default Verification;
