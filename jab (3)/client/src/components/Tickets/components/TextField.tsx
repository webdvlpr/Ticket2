import { ProFormText } from '@ant-design/pro-components'
import React from 'react'

interface TextProps {
    label: string;
    dependencies?:any;
    disable:boolean;
    name:any
}


function Textfield(props:TextProps) {
  const {label,dependencies,disable,name}=props;
  return (
    <ProFormText 
      label={label}
      name={name}
      style={{marginTop:"1em"}}
      allowClear
      dependencies={dependencies}
      disabled={disable}
    />
  )

}

export default Textfield