import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import dog from '../../Images/dog.jpeg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#4e73df',
        backgroundImage: 'linear-gradient(180deg,#4e73df 10%,#224abe)',
        height: '100vh'
    },
}))

function LogIn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                    <div className="card shadow-lg o-hidden border-0 my-5">
                        <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 hide">
                                <img src={dog} alt='' className='w-100' />
                            </div>
                            <div className="col-lg-6">
                                <div className='mt-5 text-center'>
                                    <h2>Welcome Back!</h2>
                                    <form className='col-10 login-form mx-auto mt-4'>
                                        <div className='form-group'>
                                            <input type='email' className='form-control' placeholder='Enter Email Address...' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='password' className='form-control' placeholder='Password' />
                                        </div>
                                        <div className="form-check text-left ml-4">
                                            <input type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">Remember me</label>
                                        </div>
                                        <div className='mt-5'>
                                            <Link to='/' className='btn btn-block btn-lg btn-purple'>Login</Link>
                                            <hr />
                                            <Link to='/login' className='btn btn-block btn-lg btn-danger'><i class="fab fa-google"></i> Login with Google</Link>
                                            <Link to='/login' className='btn btn-block btn-lg btn-dark-purple mt-3'><i class="fab fa-facebook-f"></i> Login with Facebook</Link>
                                            <hr />
                                            <Link to='/login'>Forgot Password?</Link><br />
                                            <Link to='/login'>Create an Account!</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn