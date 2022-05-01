import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            // console.log(emailRef.current.value, passwordRef.current.value)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError("Failed to login")
        }

        setLoading(false)
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-2">
                        Log In
                    </h2>
                    { error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 mt-2' type='submit'>Login</Button>
                    </Form>

                    <div className="w-100 text-center mt-2">
                        <Link to='/forgot-password'>Forgot password?</Link>
                    </div>


                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign up</Link>
            </div>
        </>
    )
}

export default Login