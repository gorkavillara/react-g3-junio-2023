import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import styles from "./FormularioClasico.module.scss"

const validationSchema = yup.object({
    username: yup
        .string()
        .required("El campo username es obligatorio")
        .min(4, "El campo username debe tener al menos 4 caracteres")
        .max(15, "El campo username debe tener como máximo 15 caracteres"),
    password: yup.string().required(),
    edad: yup.number().moreThan(17),
    birthdate: yup.date().max(new Date())
})

const FormularioFormik = () => {
    return (
        <div className={styles.FormularioClasico}>
            <h2>Trabajando con Formik</h2>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values, options) => {
                    console.log("Enviando correctamente")
                    console.log(values)
                    console.log(options)
                }}
                validationSchema={validationSchema}
                validate={(values) => {
                    const errors: { username?: string; password?: string } = {}

                    // if (values.username.length < 4) {
                    //     // Marcar un error
                    //     errors.username =
                    //         "El nombre de usuario debe tener al menos 4 caracteres"
                    // }

                    // if (values.password.length === 0) {
                    //     errors.password = "El campo password es obligatorio"
                    // }

                    return errors
                }}
            >
                <Form>
                    <Field name="username" type="text" />
                    <ErrorMessage
                        name="username"
                        render={(msg: string) => (
                            <span className={styles.errorMessage}>{msg}</span>
                        )}
                    />
                    <Field name="password" type="password" />
                    <ErrorMessage name="password">
                        {(msg: string) => (
                            <span className={styles.errorMessage}>{msg}</span>
                        )}
                    </ErrorMessage>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormularioFormik
