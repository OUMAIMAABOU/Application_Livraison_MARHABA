import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import Login from '../components/Authentification/login'
import { BrowserRouter } from 'react-router-dom'

describe('login',()=>{
    test("check form login form inputs",()=>{
        const component =  render(<BrowserRouter><Login /></BrowserRouter> );
        const emailInput = component.getByTestId("email")
        const passwordInput = component.getByTestId("password")
        const button = component.getByTestId("submit")

        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    }) 
})



