import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "./formikfield";
import { FieldArray } from 'formik';
import { Field, ErrorMessage } from "formik";
import {Radioform} from './radioform'

function RegisterForm(){
    const initialValues = {
        username:"",
        email: "",
        password: "",
        confirmpassword:"",
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
          .required("Email field is required"),
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
                <div style={{ padding: 20 }}>
                  <FormikField label="username" name="username" type="username"/>
                  <FormikField label="Email" name="email" type="email" />
                  <FormikField label="Password" name="password" type="password"/>
                  <FormikField label="confirmpassword" name="confirmpassword"type="confirmpassword"/>
                  {/*  */}
                  <Radioform type="radio" name="gender" value="Female" valuetwo="Male" />

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
                  <button style={{ display: "block" }} className="btn-register">submit</button>
                </div>
                <pre>{JSON.stringify(formik, null, 4)}</pre>
              </Form>
            );
          }}
        </Formik>
    
    );
}
export {RegisterForm}