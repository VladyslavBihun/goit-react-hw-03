import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.phone,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <div className={css.inputWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="username" id={nameId}></Field>
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={phoneId}>Phone</label>
            <Field type="text" name="phone" id={phoneId}></Field>
            <ErrorMessage className={css.error} name="phone" component="span" />
          </div>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
