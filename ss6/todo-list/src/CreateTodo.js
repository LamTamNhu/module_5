import { Field, Formik, Form } from "formik";
import { save } from "./services/TodoListService";
import { useNavigate } from "react-router-dom";

export function CreateTodo() {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values, action) => {
          console.log(values);
          const create = async (todo) => {
            await save(todo);
          };
          create(values);
          // navigate("/");
          action.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="title"></Field>
            {isSubmitting ? (
              <p>Submitting</p>
            ) : (
              <button type="submit">Add</button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
