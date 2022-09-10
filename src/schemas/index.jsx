import * as Yup from "yup" ;

export const signupSchema= Yup.object({
    firstName:Yup.string().min(2).max(30).required("please enter your first name"),
    lastName:Yup.string().min(2).max(30).required("please enter your last name"),
    email:Yup.string().email().required("please enter your Email"),
    password:Yup.string().min(8).required("please enter your Password")
})