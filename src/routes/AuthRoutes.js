import React from "react"


const Login = React.lazy(() => import('../components/login/Login'));
const ForgetPassword = React.lazy(() => import('../components/password/ForgetPassword'));
const CreateProfile = React.lazy(()=> import('../components/profile/CreateProfile'));


const AuthRoutes = [
	{path:'',exact:true,name:'login',component:Login},
	{path:'/forget-password',exact:true,name:'forgetpassword',component:ForgetPassword},
	{path:'/create-profile',exact:true,name:'createprofile',component:CreateProfile},
]


export {AuthRoutes};