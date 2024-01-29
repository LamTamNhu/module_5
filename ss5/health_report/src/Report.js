import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const ReportSchema = Yup.object().shape({
  name: Yup.string().required("Bắt buộc nhập"),
  IDNumber: Yup.string().required("Bắt buộc nhập"),
  birthYear: Yup.number(),
  gender: Yup.boolean(),
  nationality: Yup.string(),
  company: Yup.string(),
  department: Yup.string(),
  isHealthInsured: Yup.boolean(),
});
export function ReportForm() {
  return (
    <>
      <Formik
        validationSchema={ReportSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="container mt-3">
          <label className="form-label" htmlFor="name">
            Họ tên
          </label>
          <Field className="form-control" type="text" id="name" name="name"></Field>
          <ErrorMessage name="name" className="text-danger" component="p"></ErrorMessage> 
          
          <label className="form-label" htmlFor="IDNumber">
            Số hộ chiếu/CMND
          </label>
          <Field className="form-control" type="text" id="IDNumber" name="IDNumber"></Field>
          <ErrorMessage name="IDNumber" className="text-danger" component="p"></ErrorMessage>

          <label className="form-label" htmlFor="birthYear">
            Năm sinh
          </label>
          <Field className="form-control" type="number" id="birthYear" name="birthYear"></Field>
          <ErrorMessage name="birthYear" className="text-danger" component="p"></ErrorMessage>         

          <p>Giới tính</p>
          <Field className="form-check-input" type="radio" id="male" name="gender"></Field>
          <label className="form-check-label" htmlFor="male">
            Nam
          </label>
          <ErrorMessage name="gender" className="text-danger" component="p"></ErrorMessage>
          <Field className="form-check-input ms-3" type="radio" id="female" name="gender"></Field>
          <label className="form-check-label" htmlFor="female">
            Nữ
          </label>
          <ErrorMessage name="gender" className="text-danger" component="p"></ErrorMessage>

          <div className="mt-3">
          <button className="btn btn-primary">Gửi</button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
