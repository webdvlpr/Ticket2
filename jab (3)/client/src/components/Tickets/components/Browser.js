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
  
const Browser = ({disable,dependencies}) => {
  return (
<ProFormSelect
                // className="inputbar2"
                name={["browser"]}
                showSearch
                placeholder="Select Browser"
                width={250}
                disabled={disable}
                dependencies={dependencies}
                request={async () => {
                  const res = await axios.get(
                    `${BaseUrl}/api/ticket/browser/`
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

export default Browser