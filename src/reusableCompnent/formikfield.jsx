import { Field } from "formik";
import FormikErrorMessage from "./formikerrormsg";


//  * FormikField Component
 
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}className="log-email" >
              {label}
            </label>
            <input
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
              className="log-input"
            />
            <FormikErrorMessage name={name} />
            {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;