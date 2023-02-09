import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signIn } from "next-auth/react"

export default function Login() {
    const [alert, setAlert] = useState(null);
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address.').required('You have to provide email address.'),
        password: Yup.string()
            .required('Please enter password.')
    })

    return (
        <div>
        <div className="flex h-screen w-screen">
            <div className="m-auto flex flex-col border border-indigo-500 w-1/2 h-3/5">
                <div className="my-auto">
                    <div className="my-6 text-gray-600 text-center text-2xl">
                        Login
                    </div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            let res = await signIn("credentials", {
                                redirect: false,
                                email: values.email,
                                password: values.password,
                                callbackUrl: "/",
                            });
                
                            if (res.ok) {
                                setAlert({ msg: "Logged in", type: "success" });
                                setTimeout(() => {
                                    setAlert(null);
                                    router.push("/");
                                }, 2000);
                            } else {
                                setAlert({ msg: "Invalid email or password", type: "danger" });
                                setTimeout(() => {
                                    setAlert(null);
                                }, 2000);
                            }
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                        }) => (
                            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                                <input id="email" name="email" type="email" onChange={handleChange} onBlur={handleBlur} className="block p-2 w-1/2 mt-8 bg-white border border-gray-400 rounded" placeholder="E-mail"></input>
                                { errors.email && touched.email ? <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded">{errors.email}</div> : null }
                                <input id="password" name="password" type="password" onChange={handleChange} onBlur={handleBlur} className="block p-2 w-1/2 mt-8 bg-white border border-gray-400 rounded" placeholder="Password"></input>
                                { errors.password && touched.password ? <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded">{errors.password}</div> : null }
                                { alert && <div className={`p-1 mt-1 text-sm ${ alert.type === "danger" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700" } rounded w-1/2`}>{alert.msg}</div> }
                                <button type="submit" className="flex border mt-8 rounded px-8 py-2 text-sm mx-auto border-indigo-500 text-indigo-500" disabled={isSubmitting}>Login</button>
                            </form>
                        )}
                    </Formik>
                    <div className="text-gray-500 text-center my-6">
                        Don't have an account? <div className="inline text-indigo-500 cursor-pointer" onClick={() => router.push("/register")}>Register.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};