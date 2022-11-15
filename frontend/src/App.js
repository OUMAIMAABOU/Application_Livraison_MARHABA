import {
  Login,
  Routes,
  Route,
  BrowserRouter,
  Register,
  Restpassword,
  Forgotpassword,
  Activecompte,
  Verification,
  Dashboard,
  Home,
  ProductRout,
  Header,Homepage
} from "./route";
// import Merge from './components/Authentification/mergecomp'

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route element={<ProductRout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/verification" element={<Verification />} />
          </Route>
          <Route path="/configiration/:token" element={<Activecompte />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/restpassword/:token" element={<Restpassword />} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
