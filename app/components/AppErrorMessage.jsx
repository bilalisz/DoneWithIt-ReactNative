import React from 'react';
import AppColor from '../../config/AppColor';
import AppText from './AppText'
function AppErrorMessage({error,visable,color=AppColor.dangerTiny}) {
    if(!error || !visable) return null;
    return <AppText text={error} color={color}/>
  
}

export default AppErrorMessage;