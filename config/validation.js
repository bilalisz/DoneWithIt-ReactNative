import * as Yup from 'yup';

export const validationSchema= Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(5).label("Password")

})