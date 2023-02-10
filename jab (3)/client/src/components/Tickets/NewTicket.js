import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  Input,
  InputNumber,
  Space,
  Col,
  Divider,
  Row,
  Select,
  message,
  Upload,
  Modal,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DragDrop from "./DragDrop";
import Header from "../Header/Header";
import { BaseUrl } from "../../utilities/helper";
// import { ProFormSelect } from "@ant-design/pro-components";
import {
  ProForm,
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import Manufacturer from "./components/Manufacturer";
import SelectOs from "./components/SelectOs";
import Browser from "./components/Browser";
import OsVersion from "./components/OsVersion";
import DragDrop2 from "./DragDrop2";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { TextArea } = Input;
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

function NewTicket() {
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  
 
  const postRequest = async (data) => {
    
    const res = await axios.post(`${BaseUrl}/api/ticket/add`, {...data,user: localStorage.getItem("userId"),image:"hi" }).catch((err) => console.log(err));
    const {data: returnedData,status} = await res;
    console.log(returnedData,status);
    return {returnedData,status};
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = form.getFieldsValue();
    postRequest(values).then((data,status) => {
      if(status === 200){
        message.success("Ticket Created Successfully");
        setModal2Open(true)

      }else{
        message.error("Error Creating Ticket");
      }
    })
    // console.log(values)
    // postRequest().then(() => navigate("/newticket"));
  };

  return (
    <div>
      <Header />
      <Card className="welcomeCard3">
        <Row className="titlerow">
          <h1 style={{ textAlign: "left", marginBottom: "0", fontSize: "2em" }}>
            IT Service Ticket
          </h1>
        </Row>
        <h4
          style={{
            textAlign: "left",
            marginTop: "0",
            marginBottom: "5%",
            fontSize: "18px",
            fontWeight: "lighter",
          }}
        >
          Please Provide Details of the problem.
        </h4>
        <ProForm
          form={form}
          // formRef={form}
          submitter={{
            submitButtonProps: {
              style: {
                display: "none",
              },
            },
            resetButtonProps: {
              style: {
                display: "none",
              },
            },
          }}
          name="nest-messages"
          style={{
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft:"5%",
          }}
        >
          <ProFormGroup style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, fr)",
            // gridGap: "10px",
            gap:"2px",
            marginTop:"2em"
          }}>
            
              <ProFormSelect
                name='device'
                width={250}
                // value={input.device}
                className="inputbar2"
                placeholder="Select device"
                request={async () => {
                  const res = await axios.get(`${BaseUrl}/api/ticket/device`);
                  const data = await res?.data?.data?.map((item) => {
                    return {
                      value: item,
                      label: item,
                    };
                  });
                  return data;
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please select',
                  },
                ]}
                />              
                <ProFormDependency name={['device']}>
                  {({ device }) => {
                    return <Manufacturer device={device} disable={!device} dependencies={['device']}/>
                  }}
                </ProFormDependency>
              <ProFormDependency name={['device', 'manufacturer']}>
                {({ device, manufacturer }) => {
                  return <SelectOs disable={!device || !manufacturer} dependencies={['device', 'manufacturer']} />
                }}
              </ProFormDependency>
              <ProFormDependency name={['device', 'manufacturer']}>
                {({ device, manufacturer}) => {
                  return <OsVersion disable={!device || !manufacturer} dependencies={['device', 'manufacturer']} />
                }}
              </ProFormDependency>
              <ProFormDependency name={['device', 'manufacturer', 'os']}>
                {({ device, manufacturer, os }) => {
                  return <Browser disable={!device || !manufacturer || !os} dependencies={['device', 'manufacturer', 'os']} />
                }}
              </ProFormDependency>
              
              <ProFormDependency name={['device', 'manufacturer', 'os', 'browser']}>
                {({ device, manufacturer, os, browser }) => {
                  return <ProFormText
                    name={["browser_version"]}
                    width={250}
                    // disabled={!device || !manufacturer || !os || !browser}
                    dependencies={['device', 'manufacturer', 'os', 'browser']}
                    allowClear
                    placeholder="Browser Version (optional)"
                  />
                }}
              </ProFormDependency>
             
            <ProFormDependency name={['device', 'manufacturer', 'os', 'browser']}>
              {({ device, manufacturer, os, browser }) => {
                return <ProFormTextArea
                  name={["description"]}
                  width={535}
                  disabled={!device || !manufacturer || !os || !browser}
                  dependencies={['device', 'manufacturer', 'os', 'browser']}
                  allowClear
                  placeholder="Describe the problem"
                />
              }}
              
            </ProFormDependency>
          </ProFormGroup>
          <ProFormGroup>
            <div style={{width:"550px",paddingRight:"2%"}}>
            {/* <DragDrop style={{width:"500px"}}/> */}
            <DragDrop2 style={{marginLeft:"2%", width: "80%"}}/>
            </div>
          <Button
                type="primary"
                htmlType="submit"
                className="signupbtn"
                onClick={(e) => handleSubmit(e)}
                style={{
                  marginLeft:"200%",
                  marginTop: "35%"
                }}
              >
                Create Ticket
              </Button>
          </ProFormGroup>
            <ProFormGroup>
            <Modal
              centered
              open={modal2Open}
              onOk={() => setModal2Open(false)}
              onCancel={() => setModal2Open(false)}
            >
              <h1>Thanks for your submission!</h1>
              <p>We really appreciate your submission!</p>
              <p>
                Your Ticket has been Submitted
                Successfully!
              </p>
              <p>We will get in touch with you, soon.</p>
            </Modal>
          </ProFormGroup>
        </ProForm>
      </Card>
    </div>
  );
}

export default NewTicket;
