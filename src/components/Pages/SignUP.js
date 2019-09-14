import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class LogIn extends Component {
    render() {
        return (
            <div className='log-bg'>
                <div className="signupbox rounded p-2">
                    <h4 className='log-title center'>Sign Up</h4>
                    <Form className="p-2 mt-2">
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4">
                            <Form.Control type="text" placeholder="Interested Topics" />
                            <div className="rules">
                                <p>All topics should end with a comma[,]</p>
                                <div >
                                <button className="topixs">Sports X</button>
                                <button className="topixs">Science X</button>
                                </div>
                            </div>

                        </Form.Group>
                            
                       


                        <Form.Group className='center'>
                            <Button className="btn">Sign Up</Button>
                        </Form.Group>

                    </Form>
                </div>

            </div>
        )
    }
}
export default LogIn;