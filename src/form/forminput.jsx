import { useFormik } from "formik";
import * as yup from "yup";
import '../countshow.css'

function Forminput(){
   const formik=useFormik({
       initialValues:{ 
           email:"",
           password:"",
           rememberme:false,
       },
       onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
       validationSchema:yup.object({
        //    name:yup.string().required("enter your name").max(16),
           email:yup.string().email("Please enter a valid email address").required("Email field is required").matches(/^[a-zA-Z0-9_]+@(hotmail|yahoo|gmail)\.com$/),
           password:yup.string().required("Password must contain capital, small letters ,numbers and */@#").max(8).matches(/[a-z]{1,}[A-Z]{1,}[0-9]{1,}[*@%$# ]{1,}/),
        //    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
       }),
   })
  
    return(
        <>
            <h1 className="h-register">LOG IN PAGE </h1>
        <form onSubmit={formik.handleSubmit} className="form">
      <div style={{ padding: 20 }}> 
        <label htmlFor="email" style={{ display: "block" ,marginRight:"0.5em" , fontSize:"1rem"}}>
          email
        </label>
        <input type="email"
        id="email"
        className="input"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

         { formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password" style={{ display: "block",marginTop:"0.5em" , fontSize:"1rem" }}>
          password
        </label>
        <input type="password" 
        className="input"
        id="password" 
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

        { formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
      
{/*  */}
        <label htmlFor="rememberMe" style={{ display: "block" }}>
          remember me
        </label>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          defaultChecked={formik.values.rememberMe}
        />

        {/*  */}
        <button style={{ display: "block" }} className="btn-register" >submit</button>
      </div>
      <pre>{JSON.stringify(formik,null,4)}</pre>
    </form>
    </>
    )
}

export {Forminput}