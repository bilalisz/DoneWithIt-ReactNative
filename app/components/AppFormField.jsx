import React from 'react';
import {TextBox,AppErrorMessage} from '../components';
import {useFormikContext} from 'formik'


function AppFormField(props) {
const {name,...otherProps}=props;

const {handleChange,setFieldTouched,errors,touched}=useFormikContext()
    return (
        <>
        <TextBox
        onChangeText={handleChange(name)}
        onBlur={()=>setFieldTouched(name)}
        
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visable={touched[name]}/>
       </>
    );
}

export default AppFormField;