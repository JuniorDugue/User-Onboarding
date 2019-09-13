import React from "react";
import {withFormik, Form, Field} from "formik";
// import * as yup from "yup";

function Forms(errors, touched){
  return(
    <Form className="form">
      <Field type="text" name="name" placeholder="Name" /><br/>
      <Field type="text" name="email" placeholder="Email" /><br/>
      <Field type="password" name="password" placeholder="Password" /><br/>
      <Field type="checkbox" name="checkbox" /><br/>

      <button type="submit">Submit</button>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return{
      name: values.name || "",
      email: values.email || "",
      password: values.password || "",
      tos: values.tos || "",
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(Forms);