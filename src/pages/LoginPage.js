import React from 'react'
import loginImg from '../images/login-v2.svg'

function LoginPage() {
    return (
        <>
            <div className='container-fluid ' style={{ height: "100vh" }}>
                <div className='row d-flex loginformParent'>
                    <div className='col-8 d-flex justify-content-center align-items-center'>
                        <div className='loginformimg'>
                            <img src={loginImg} alt="" width={"100%"} />
                        </div>
                    </div>
                    <div className='col-4 loginform d-flex justify-content-center align-items-center'>
                        <div className='loginformchild'>
                            <h4 className='mb-4'>CBSL</h4>
                            <h5 style={{ fontSize: "22px", fontWeight: "400" }}>Welcome to CBSL!</h5>
                            <p className=''>Please sign-in to your account and start the adventure</p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPhone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPhone"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-0 ">
                                    <label htmlFor="exampleInputPassword1" className="form-label d-flex justify-content-between">
                                        Password
                                        <span className='purple'>Forgot Password?</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                                <p className='mt-2'>Remember Me</p>
                                <button type="submit" className="btn btn btnbg">
                                    Submit
                                </button>
                                <p className='text-center mt-1'>New on our Platform?<span className='purple'>create new account</span></p>
                                <p className='text-center'>or</p>
                            </form>
                            <button className='btn btn-outline-danger btnbg2 mt-3'>
                                Go To Website
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
