import * as Yup from 'yup';
import React, { Fragment, useState, useEffect } from 'react';
import { Card, Button, Form, Input, InputNumber, Space, Col, Divider, Row, Select, message } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userid } from '../../store';
import { BaseUrl } from '../../utilities/helper';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "", })

    const handleChange = (e) => {
        setInput((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }));
    }
    const postRequest = async (type = "login") => {
        const res = await 
        axios.post(`${BaseUrl}/api/user/${type}`, {
            email: input.email,
            password: input.password,
        })
        // message.promise()
        
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postRequest("login")
            .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch(userid.login()))
            .then(() => navigate("/newticket"));
    }
    return (
        <div>
            <Card className='welcomeCard'>
                <h1 style={{ textAlign: "center", marginBottom:"0",fontSize:"300%" }}>Welcome Back,</h1>
                <h4 style={{ textAlign: "center",marginTop:"0", fontSize: "16px", fontWeight:"lighter" }}>Please confirm your details.</h4>
                <form
                    onSubmit={handleSubmit}
                    {...layout}
                    name="nest-messages"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item
                        name={['email']}
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                        className="formItem-signin"
                     >
                        <Input className="inputbar-signin" name='email' onChange={handleChange}
                            value={input.email} placeholder="Email address" />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password className="inputbar-signin" name='password' onChange={handleChange}
                            value={input.password} placeholder="input password" />
                    </Form.Item>
                    <Form.Item

                    >
                        <Button type="primary" onClick={handleSubmit} name='submit' className='signinbtn'>
                            Sign in
                        </Button>
                    </Form.Item>
                </form>
                <p style={{ textAlign: "center" }}>or</p>
                <p style={{ textAlign: "center" }}>Dont't have an account? please <button className="navigateButton" onClick={()=>{navigate('/signUp')}}> sign up</button></p>

            </Card>
        </div>
    )
}

export default SignIn