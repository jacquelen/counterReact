import {Field} from "formik";


function Radioform({type, name,value,valuetwo}){

return(
<>
<div id="my-radio-group" style={{ margin: "0.5em" ,fontSize:"1.5rem",display:"block" }}> <strong>  Gender :</strong></div>

          <div role="group" aria-labelledby="my-radio-group" style={{ margin:"0.2em" , display:"inline-block}"}}  >
            <label  style={{ margin:"0.2em" ,fontSize:"1.5em" }} >
              <Field type={type} name={name} value={value} style={{ margin:"0.3em"}} />
              Female
            </label>
            <label style={{ margin:"0.2em" ,fontSize:"1.5em"}}>
              <Field type={type} name={name} value={valuetwo} style={{ margin:"0.3em"}}  />
              Male
            </label>
            {/* <div>Gender: {formik.values.gender}</div> */}
          </div>

</>

)

}
export {Radioform}
