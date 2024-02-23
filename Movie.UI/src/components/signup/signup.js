import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Signup = () => {
    const [username, setIUsername] = useState("")
    const [password, setPassword] = useState("")

    const UserInputChange = (e) => {
        e.preventDefault()
        setIUsername(e.target.value)
    }

    const PasswordInputChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const onSignuphandler = (e) => {
        e.preventDefault()
        const userData = {
            username: username,
            password: password
        }
        console.log("userData-----------",userData.username,userData.password);
    }

  return (
    <Container>
        <Card className='cardBlock'>
        <h1>SIGN-UP here</h1>
        <Form onSubmit={onSignuphandler}>
            <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={username}
                  onChange={(e) =>UserInputChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => PasswordInputChange(e)}
                />
              </Form.Group>
              <Button 
              color="primary"
            //   onClick={onSignupClick}  
            type='submit'
            >Sign up</Button>
            <p>
                Already have a account? <a href='/login'>Log in</a>
            </p>
        </Form>
        </Card>
    </Container>
  )
}

export default Signup