import "../countshow.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FieldArray } from 'formik';
import * as yup from "yup";

function Logform(){
    const initialValues = {
        username:"",
        email: "",
        password: "",
        confirmpassword:"",
        rememberMe: false,
        gender:"",
        hoppies:[{
            hoppie:''
        }],
      };
      const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
      const validationSchema = yup.object({
        username:yup.string().required("Enter your name"),
        email: yup
          .string()
          .email("Please enter a valid email address")
          .required("Email field is required")
          .matches(/^[a-zA-Z0-9_]+@(hotmail|yahoo|gmail)\.com$/)
          ,
        password: yup.string().required("Password must contain capital, small letters ,numbers and */@#")
        .max(8).matches(/[a-z]{1,}[A-Z]{1,}[0-9]{1,}[*@%$# ]{1,}/),
        confirmpassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
      });
    
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                  <h2 className="h-log" > REGISTER PAGE </h2>
                <div style={{ padding: 10 }}>
                <Field name="username">
                    {(formikField) => {
                      return (
                        <>
                          <label htmlFor="username" style={{ display: "block" }}
                          className="log-email"
                          >
                            username
                          </label>
                          <input type="text" id="username" {...formikField.field}
                          className="log-input"
                          />
                          <ErrorMessage name="username">
                            {(errMessage) => {
                              return (
                                <div style={{ color: "red" }}>{errMessage}</div>
                              );
                            }}
                          </ErrorMessage>
                          {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                        </>
                      );
                    }}
                  </Field>
                    {/*  */}
                  <Field name="email">
                    {(formikField) => {
                      return (
                        <>
                          <label htmlFor="email" style={{ display: "block" }}
                          className="log-email"
                          >
                            email
                          </label>
                          <input type="email" id="email" {...formikField.field}
                          className="log-input"
                          />
                          <ErrorMessage name="email">
                            {(errMessage) => {
                              return (
                                <div style={{ color: "red" }}>{errMessage}</div>
                              );
                            }}
                          </ErrorMessage>
                          {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                        </>
                      );
                    }}
                  </Field>
    
                  <Field name="password">
                    {(formikField) => {
                      return (
                        <>
                          <label htmlFor="password" style={{ display: "block" }}
                          className="log-email"
                          >
                            password
                          </label>
                          <input
                            type="password"
                            id="password"
                            {...formikField.field}
                            className="log-input"
                          />
                          <ErrorMessage name="password">
                            {(errMessage) => {
                              return (
                                <div style={{ color: "red" }}>{errMessage}</div>
                              );
                            }}
                          </ErrorMessage>
                          {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                        </>
                      );
                    }}
                  </Field>
                  {/*  */}
                  <Field name="confirmpassword">
                    {(formikField) => {
                      return (
                        <>
                          <label htmlFor="confirmpassword" style={{ display: "block" }}
                          className="log-email"
                          >
                          confirm password
                          </label>
                          <input
                            type="password"
                            id="confirmpassword"
                            {...formikField.field}
                            className="log-input"
                          />
                          <ErrorMessage name="confirmpassword">
                            {(errMessage) => {
                              return (
                                <div style={{ color: "red" }}>{errMessage}</div>
                              );
                            }}
                          </ErrorMessage>
                          {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
                        </>
                      );
                    }}
                  </Field>
                  {/*  */}
          <div id="my-radio-group" style={{ margin: "0.5em" ,fontSize:"1.5rem",display:"inline-block" }}> <strong> Gender:</strong></div>
          <div role="group" aria-labelledby="my-radio-group" style={{ margin:"0.2em" , display:"inline-block}"}}  >
            <label  style={{ margin:"0.2em" ,fontSize:"1.5em" }} >
              <Field type="radio" name="gender" value="Female" style={{ margin:"0.3em"}} />
              Female
            </label>
            <label style={{ margin:"0.2em" ,fontSize:"1.5em"}}>
              <Field type="radio" name="gender" value="Male" style={{ margin:"0.3em"}}  />
              Male
            </label>
            {/* <div>Gender: {formik.values.gender}</div> */}
          </div>


                  {/*  */}
                  {/* <Field name="rememberMe">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="rememberMe" style={{ display: "inline-block" }}>
                     <strong> reminder me </strong>
                      </label>
                      <input
                        type="checkbox"
                        id="rememberMe"
                        defaultChecked={formikField.field.value}
                        {...formikField.field}
                      />
                      <pre>{JSON.stringify(formikField, null, 4)}</pre>
                    </>
                  );
                }}
              </Field> */}
         {/*  */}

         {/*  */}
         <FieldArray name="hoppies">
            {({ insert, remove, push }) => (
              <div>
                {formik.values.hoppies.length > 0 &&
                  formik.values.hoppies.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`hoppies.${index}.hoppie`}>hoppy</label>
                        <Field
                          name={`hoppies.${index}.hoppie`}
                          placeholder="your fav hoppy"
                          type="text"
                          className="field"
                        />
                        <ErrorMessage
                          name={`hoppies.${index}.hoppie`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="btn-register"
                  onClick={() => push({ hoppie :''})}
                >
                  Add hoppie
                </button>
              </div>
            )}
          </FieldArray>
          
                  {/*  */}
                  <button style={{ display: "block" }}
                  className="btn-register"
                  >submit</button>
                </div>
                <pre>{JSON.stringify(formik, null, 4)}</pre>
              </Form>
            );
          }}
        </Formik>
      );

}
export {Logform}