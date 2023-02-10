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
  
const SelectOs = ({disable,dependencies}) => {
  return (
<ProFormSelect
                // className="inputbar2"
                name={["os"]}
                showSearch
                placeholder="Select SelectOs"
                disabled={disable}
                width={250}
                dependencies={dependencies}
                request={async () => {
                  const res = await axios.get(
                    `${BaseUrl}/api/ticket/os/`
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

export default SelectOs