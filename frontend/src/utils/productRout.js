import { Navigate, Outlet } from 'react-router-dom'
const ProductRout = () => {
  const token =localStorage.getItem('token')
  console.log("token is" +token)
  let auth = {token:false}
return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default ProductRout;
