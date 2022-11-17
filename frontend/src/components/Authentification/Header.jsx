import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-0 py-3 btncolor mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Livraison Marhaba
            </span>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {localStorage.getItem("token") ? (
                <button
                  className="fab fa-pinterest text-lg leading-lg text-white "
                  onClick={logOut}
                >
                  logout
                </button>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="fab fa-twitter text-lg leading-lg text-white mx-2"
                  >
                    login
                  </Link>
                  <Link
                    to="/register"
                    className="fab fa-pinterest text-lg leading-lg text-white mx-2 "
                  >
                    register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
