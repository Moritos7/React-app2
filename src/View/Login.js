import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeAuth } from '../Redux/Slice'

function Login() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                {!auth && <button className='btn btn-primary' onClick={() => dispatch(changeAuth(!auth))}>Login  </button>}
            </form>

            
            {!auth && <Button className='btn btn-primary' onClick={()=>dispatch(changeAuth(!auth))}> {auth? 'Logout' : 'Login'} </Button>}
        </div>
    )
}

export default Login
