import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaUserCircle } from 'react-icons/fa'

class LogIn extends Component {
    render() {
        return (
            <div className='log-bg'>
                <div className="loginbox rounded p-2">
                    <FaUserCircle className="avatar" style={{ width: '100px', height: '100px' }} />
                    <div className='align-content-center mt-5 text-center'>
                        <h4 className='log-title'>Log In</h4>
                    </div>

                    <Form className="p-2 mt-2">
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group type='checkbox'>
                            <Form.Check type='checkbox' className='check-title' label='Remember Me'/>
                        </Form.Group>


                        <Form.Group>
                            <Button className="btn">Log In</Button>
                        </Form.Group>

                    </Form>
                </div>

            </div>
        )
    }
}
export default LogIn;