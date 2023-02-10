/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';
import React, { Fragment, useState, useEffect } from 'react';
import { useFormik as useForm, FormikProvider } from 'formik';
import { Card, Button, Form, Input, InputNumber, Space, Col, Divider, Row, Select, message } from 'antd';
import { EyeTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userid } from '../../store';
import { BaseUrl } from '../../utilities/helper';
import Header from '../../components/Header/Header';
import { ProFormDependency, ProFormGroup, ProFormSelect } from '@ant-design/pro-components';

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
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};


function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        company: "",
        department: "",
        region_number: "",
        region_name: "",
        appartment: "",
        address: "",
        city: "",
        ward: "",
    })

    const handleChange = (e, company_name= false,department_name=false) => {
        console.log(e,company_name,department_name)
        if(company_name === true && department_name ===false){
            input.company=e
            // console.log("hii")
            // setInput((prevValue) => ({
            //     ...prevValue,
            //     company: e,
            // }));
        }
        else if(company_name===false && department_name===true){
            input.department=e
            // setInput((prevValue) => ({
            //     ...prevValue,
            //     department:e,
            // }));
        }else {
            setInput((prevValue) => ({
                ...prevValue,
                [e?.target?.name]:e?.target?.value,
            }));
        }
        console.log(input)
    }
    const postRequest = async (type = "signup") => {
        
        const res = await  axios.post(`${BaseUrl}/api/user/${type}`, {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            phone: input.phone,
            password: input.password,
            company: input.company,
            department: input.company,
            region_number: input.region_number,
            region_name: input.region_name,
            appartment: input.appartment,
            address: input.address,
            city: input.city,
            ward: input.ward,
        })

        if(res?.status===201){
            return (
                message.success("Success")
            )
            }else{
                message.error("Unable to SignUp")
        }
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postRequest("signup")
            .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch(userid.login()))
            .then(() => navigate("/newticket"));
    }

    return (
        <div>
            <Header/>
            <Card className='welcomeCard2' style={{marginTop:"10%"}}>
                <h1 style={{ textAlign: "center",marginBottom:"0",fontSize:"300%" }}>Welcome to Jab companies,</h1>
                <h4 style={{marginLeft:"6%",marginTop:"0", fontSize: "16px", fontWeight:"lighter" }}>Please enter your details.</h4>

                <form
                    {...layout}
                    name="nest-messages"
                    onSubmit={handleSubmit}
                    style={{
                        maxWidth: 600,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                    validateMessages={validateMessages}
                >
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='first_name' onChange={handleChange} placeholder="First name" value={input.first_name}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='last_name' onChange={handleChange} placeholder="Last name" value={input.last_name}/>
                        </Form.Item>
                    </Row>
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'
                            name={['email']}
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input className="inputbar-signup" name='email' onChange={handleChange} placeholder="Email address" value={input.email}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='phone' onChange={handleChange} placeholder="Phone number" value={input.phone}/>
                        </Form.Item>
                    </Row>
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='password' onChange={handleChange} placeholder="Enter a password" value={input.password}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='password' onChange={handleChange} placeholder="Confirm password" value={input.password}/>
                        </Form.Item>
                    </Row>
                    <Row className="row" gutter={28} style={{height:"52px"}}>
                    <Form.Item className='formItem'>
                        <Col span={23}>

                         <ProFormSelect
                                showSearch
                                name="company"
                                placeholder="Company name"
                                proFieldProps={{
                                    onChange :(e)=>{
                                        handleChange(e,true,false)
                                    },
                                }}
                                options={[
                                    {
                                        value: 'MOHSSS',
                                        label: 'MOHSSS',
                                    },
                                ]}
                                />
                        </Col>
                    </Form.Item>
                    <Form.Item className='formItem'>
                    <Col span={23}>
                    <ProFormSelect
                    
                     className="inputbar-signup"
                     showSearch
                     name="department"
                    //  onChange={handleChange}
                     proFieldProps={{
                         onChange:(e)=> {
                             handleChange(e,false,true)
                         } 
                     }}
                     placeholder="Department"
                     options={[
                         {
                             value: 'head-office',
                             label: 'Head Office',
                         },
                         {
                             value: 'probation-and-Social-Welfare-department',
                             label: 'Probation and Social Welfare Department',
                         },
                         {
                             value: 'child-care-and-protection-agency',
                             label: 'Child Care and Protection Agency',
                         },
                         {
                             value: "hugo-chavez-centre-for-rehabilitation-and-reintegration-night-shelter",
                             label: "Hugo chavez centre for Rehabilitation and ReIntegration Night Shelter"
                         },{
                             value: "guyana-Womens-leadership-institute",
                             label: "Guyana Women's Leadership Institutes"
                         }
                     ]}
                 />      
                    </Col>
                 </Form.Item>                  
                    </Row>
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='region_number' onChange={handleChange} placeholder="Select Region Number" value={input.region_number}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='region_name' onChange={handleChange} placeholder="Select region Name" value={input.region_name}/>
                        </Form.Item>
                    </Row>
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='appartment' onChange={handleChange} placeholder="Building, Appartment, Lot#, etc" value={input.appartment}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='address' onChange={handleChange} placeholder="Address 1" value={input.address}/>
                        </Form.Item>
                    </Row>
                    <Row className="row" gutter={36}>
                        <Form.Item className='formItem'>
                            <Input className="inputbar-signup" name='city' onChange={handleChange} placeholder="City/town" value={input.city}/>
                        </Form.Item>
                        <Form.Item className='formItem'>
                            {/* <Select
                                className="inputbar-signup"
                                showSearch
                                value={input.ward}
                                onChange={handleChange}
                                placeholder="Ward/Village"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            /> */}
                            <Input className="inputbar-signup" name='ward' onChange={handleChange} placeholder="Ward/Village" value={input.ward}/>
                        </Form.Item>
                    </Row>
                    <Form.Item className='formItembtn'
                    >
                        <Button type="primary" htmlType="submit" className='signupbtn'>
                            Sign up
                        </Button>
                    </Form.Item>

                </form>
                <p style={{ textAlign: "center" }}>or</p>
                <p style={{ textAlign: "center" }}>Dont't have an account? please<button className="navigateButton" onClick={()=>{navigate('/signIn')}}> sign in</button></p>
            </Card>
        </div>
    )
}

export default SignUp