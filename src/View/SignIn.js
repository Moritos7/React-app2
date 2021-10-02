import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { signIn } from '../Redux/Slice';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const schema = yup.object().shape({
    FirstName: yup.string().required().max(20),
    LastName: yup.string().required().max(20),
    Age: yup.number().positive().integer().required().min(18).max(99),
    Email: yup.string().required().email(),
    Password: yup.string().required().min(8),
  });

function SignIn() {
    const dispatch = useDispatch()
    const history=useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)});
    
    const onSubmit = data => {
        const value={
            firstName:data.FirstName,
            lastName:data.LastName,
            age:data.Age,
            gender:data.Gender,
            email:data.Email,
            password:data.Password
        }
        dispatch(signIn(value))
        history.push('/profile')
    }
    return (
        <Container>
             <Row>
                 <Col sm='10' md='8' lg='6' className='mx-auto'> 
                     <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <input className='form-control' defaultValue="test" {...register("FirstName", {required:true, maxLength: 20})} />
                            {/* errors will return when field validation fails  */}
                            {errors.FirstName?. type==='required' && <span className='text-danger'>This field is required</span>}
                            {errors.FirstName?. type==='maxLength' && <span className='text-danger'>This field must max length less than 20 </span>}
                            <span className='text-danger'>{errors.FirstName?.message}</span>   
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <input className='form-control' defaultValue="test" {...register("LastName", {required:true, pattern: /^[A-Za-z]+$/i})} />
                            {/* errors will return when field validation fails  */}
                            {/*errors.LastName && <span className='text-danger'>This field is required</span>*/} 
                            <span className='text-danger'>{errors.LastName?.message}</span>  
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <input type='number' className='form-control' defaultValue={18} {...register("Age", {required:true, min: 18, max: 99})} />
                            {/* errors will return when field validation fails  */}
                            {/*errors.Age && <span className='text-danger'>This field is required</span>*/}
                            <span className='text-danger'>{errors.Age?.message}</span>   
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <input type='email' className='form-control' defaultValue="test" {...register("Email", {required:true})} />
                            {/* errors will return when field validation fails  */}
                            <span className='text-danger'>{errors.Email?.message}</span> 
                            {/*errors.Email && <span className='text-danger'>This field is required</span>*/}   
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <input type='password' className='form-control' defaultValue="test" {...register("Password", {required:true})} />
                            {/* errors will return when field validation fails  */}
                            <span className='text-danger'>{errors.Password?.message}</span>
                            {/*errors.Password && <span className='text-danger'>This field is required</span>*/}   
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                                <Form.Select {...register("Gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </Form.Select>   
                        </Form.Group>
                        
    
                        <Button variant='primary' type="submit" > Save </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn
