// import react, { isValidElement } from "react"
import render from "@testing-library/react"
import Input from "../components/Authentification/input"

describe('login',()=>{
    test("test email",()=>{
        const component =render(<Input />)
        const inputs =component.getByTestId("email")
        expect(inputs).toBeInTheDocument()
    })
    test("test password",()=>{
        const component =render(<Input />)
        const password =component.getByTestId("password")
        expect(password).toBeInTheDocument()
    })
})
