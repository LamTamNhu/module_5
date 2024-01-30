import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

const ReportSchema = Yup.object().shape({
  name: Yup.string().required("Bắt buộc nhập"),
  IDNumber: Yup.string().required("Bắt buộc nhập"),
  birthYear: Yup.number().min(1901, "Năm sinh phải lớn hơn 1900"),
  gender: Yup.boolean(),
  nationality: Yup.string().required("Bắt buộc nhập"),
  company: Yup.string(),
  department: Yup.string(),
  isHealthInsured: Yup.boolean(),
  city: Yup.string().required("Bắt buộc nhập"),
  district: Yup.string().required("Bắt buộc nhập"),
  local: Yup.string().required("Bắt buộc nhập"),
  address: Yup.string().required("Bắt buộc nhập"),
  phone: Yup.string().required("Bắt buộc nhập"),
  email: Yup.string().email().required("Bắt buộc nhập"),
  locationsVisited: Yup.string(),
  symptoms: Yup.array().of(Yup.string()),
  contact: Yup.array().of(Yup.string()),
});
export function ReportForm() {
  return (
    <div className="container mt-3">
      <h1 className="text-primary-emphasis justify-content-center d-flex">
        Tờ khai y tế
      </h1>
      <Formik
        initialValues={{
          name: "",
          IDNumber: "",
          birthYear: "",
          gender: "",
          nationality: "",
          company: "",
          department: "",
          isHealthInsured: false,
          city: "",
          district: "",
          local: "",
          address: "",
          phone: "",
          email: "",
          locationsVisited: "",
          symptoms: [],
          // contact: [],
        }}
        validationSchema={ReportSchema}
        onSubmit={(values) => {
          alert("Khai báo thành công!")
          console.log(values)
        }}
      >
        <Form className="container mt-3">
          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Huh"
            ></Field>
            <label htmlFor="name">Họ tên</label>
            <ErrorMessage
              name="name"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="IDNumber"
              name="IDNumber"
              placeholder=""
            ></Field>
            <label htmlFor="IDNumber">Số hộ chiếu/CMND</label>
            <ErrorMessage
              name="IDNumber"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>
          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="number"
              id="birthYear"
              name="birthYear"
              placeholder=""
            ></Field>
            <label htmlFor="birthYear">Năm sinh</label>
            <ErrorMessage
              name="birthYear"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <p>Giới tính</p>
          <Field
            className="form-check-input"
            type="radio"
            id="male"
            name="gender"
            value="true"
          ></Field>
          <label className="form-check-label" htmlFor="male">
            Nam
          </label>
          <ErrorMessage
            name="gender"
            className="text-danger"
            component="p"
          ></ErrorMessage>
          <Field
            className="form-check-input ms-3"
            type="radio"
            id="female"
            name="gender"
            value="false"
          ></Field>
          <label className="form-check-label" htmlFor="female">
            Nữ
          </label>
          <ErrorMessage
            name="gender"
            className="text-danger"
            component="p"
          ></ErrorMessage>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="nationality"
              name="nationality"
              placeholder=""
            ></Field>
            <label htmlFor="nationality">Quốc tịch</label>
            <ErrorMessage
              name="nationality"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="company"
              name="company"
              placeholder=""
            ></Field>
            <label htmlFor="company">Công ty làm việc</label>
            <ErrorMessage
              name="company"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="department"
              name="department"
              placeholder=""
            ></Field>
            <label htmlFor="department">Bộ phận làm việc</label>
            <ErrorMessage
              name="department"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="isHealthInsured">
              Có thẻ bảo hiểm y tế
            </label>
            <Field
              className="form-check-input"
              type="checkbox"
              id="isHealthInsured"
              name="isHealthInsured"
            ></Field>
            <ErrorMessage
              name="isHealthInsured"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <h3 className="mt-3">Địa chỉ liên lạc tại Việt Nam</h3>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="city"
              name="city"
              placeholder=""
            ></Field>
            <label htmlFor="city">Tỉnh thành</label>
            <ErrorMessage
              name="city"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="district"
              name="district"
              placeholder=""
            ></Field>
            <label htmlFor="district">Quận huyện</label>
            <ErrorMessage
              name="district"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="local"
              name="local"
              placeholder=""
            ></Field>
            <label htmlFor="local">Phường/xã</label>
            <ErrorMessage
              name="local"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="address"
              name="address"
              placeholder=""
            ></Field>
            <label htmlFor="address">Số nhà, phố, tổ dân phố/thôn/đội</label>
            <ErrorMessage
              name="address"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="phone"
              name="phone"
              placeholder=""
            ></Field>
            <label htmlFor="phone">Điện thoại</label>
            <ErrorMessage
              name="phone"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>

          <div className="form-floating mb-3">
            <Field
              className="form-control"
              type="text"
              id="email"
              name="email"
              placeholder=""
            ></Field>
            <label htmlFor="email">Email</label>
            <ErrorMessage
              name="email"
              className="text-danger"
              component="p"
            ></ErrorMessage>
          </div>
          <h3 className="mt-3">
            Trong vòng 14 ngày qua, anh/chị có đến quốc gia/vùng lãnh thổ nào
            (Có thể đi qua nhiều quốc gia)
          </h3>
          <Field
            type="text"
            className="form-control"
            name="locationsVisited"
          ></Field>

          <h3 className="mt-3">
            Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện dấu hiệu nào sau
            đây không?
          </h3>
          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="fever"
              id="fever"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="fever">
              Sốt
            </label>
          </div>
          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="cough"
              id="cough"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="cough">
              Ho
            </label>
          </div>
          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="asthma"
              id="asthma"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="asthma">
              Khó thở
            </label>
          </div>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="lung"
              id="lung"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="lung">
              Viêm phổi
            </label>
          </div>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="throat"
              id="throat"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="throat">
              Đau họng
            </label>
          </div>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="tired"
              id="tired"
              name="symptoms"
            />
            <label className="form-check-label" htmlFor="tired">
              Mệt mỏi
            </label>
          </div>

          <h3 className="mt-3">
            Trong vòng 14 ngày qua, anh/chị có tiếp xúc với?
          </h3>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="infected"
              id="infected"
              name="contact"
            />
            <label className="form-check-label" htmlFor="infected">
              Người bệnh hoặc nghi ngờ mắc bệch COVID-19
            </label>
          </div>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="infectedCountry"
              id="infectedCountry"
              name="contact"
            />
            <label className="form-check-label" htmlFor="infectedCountry">
              Người từ nước có bệnh COVID-19
            </label>
          </div>

          <div className="form-check">
            <Field
              className="form-check-input"
              type="checkbox"
              value="infectedSymptoms"
              id="infectedSymptoms"
              name="contact"
            />
            <label className="form-check-label" htmlFor="infectedSymptoms">
              Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
            </label>
          </div>

          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Gửi
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
