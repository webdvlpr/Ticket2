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
  
const OsVersion = ({disable,dependencies}) => {
  return (
    <ProFormText
    width={250}
    name="os_version"
    dependencies={dependencies}
    allowClear
    placeholder="Os Version (optional)"
  
  />
    )
}

export default OsVersion