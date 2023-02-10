import axios from 'axios';
import React from 'react'
import { BaseUrl } from '../../../utilities/helper';
import {
    ProForm,
    ProFormDependency,
    ProFormList,
    ProFormSelect,
    ProFormText,
  } from "@ant-design/pro-components";
  
const Manufacturer = ({device,disable,dependencies}) => {
  return (
<ProFormSelect
                // className="inputbar2"
                name={["manufacturer"]}
                width={250}
                // style={{
                //   width: "300px",
                //   margin: "0 5rem"
                // }}
                showSearch
                placeholder="Select Manufacturer"
                disabled={disable}
                dependencies={dependencies}
                request={async () => {
                  const res = await axios.get(
                    `${BaseUrl}/api/ticket/manufacturer/${device}`
                  );
                  const data = await res?.data?.data?.map((item) => {
                    return {
                      label: item,
                      value: item,
                    };
                  });
                  return data;
                }}
              />
    )
}

export default Manufacturer