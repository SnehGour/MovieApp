import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = () => {
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


    const onLoginHandler = (e) => {
        e.preventDefault()
        const userLoginData = {
            username: username,
            password: password
        }
        console.log("userLoginData-----------",userLoginData.username, userLoginData.password);
    }
    return (
        <Container>
            <Card>
                <h1>LOG-IN here</h1>
                <Form onSubmit={onLoginHandler}>
                    <Form.Group controlId="usernameId">
                        <Form.Label>User name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter user name"
                            value={username}
                            onChange={(e) => UserInputChange(e)}
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
                        // onClick={onLoginClick}
                        type="sumbit"
                    >Login</Button>
                    <p>
                        Don't have a account <a href="/signup">Sign up</a>
                    </p>
                </Form>
            </Card>
        </Container>
    );
}

export default Login;