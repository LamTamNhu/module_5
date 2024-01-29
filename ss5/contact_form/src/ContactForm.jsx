import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email('Not proper email').required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string()
});

export function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={ContactSchema}  
        onSubmit={values => {
          alert("Submitted");
          console.log(values);
        }}      
      >
        <Form className="container mt-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <Field className="form-control" type="text" id="name" name="name"></Field>
          <ErrorMessage name="name" className="text-danger" component='p'/>

          <label className="form-label" htmlFor="email">
            Email
          </label>
          <Field className="form-control" type="text" id="email" name="email"></Field>
          <ErrorMessage name="email" className="text-danger" component='p'/>

          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <Field className="form-control" type="text" id="phone" name="phone"></Field>
          <ErrorMessage name="phone" className="text-danger" component='p'/>

          <label className="form-label" htmlFor="message">
            Message
          </label>
          <Field className="form-control" type="text" id="message" name="message"></Field>
          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
