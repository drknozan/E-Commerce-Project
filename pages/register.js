import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Register() {
    const [alert, setAlert] = useState("");
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
                        Register
                    </div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            let res = await fetch("http://localhost:3000/api/auth/register", {
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify(values)
                            });
                            
                            if (res.ok) {
                                res = await res.json();
                                setAlert(res.msg);
                            } else {
                                res = await res.json();
                                setAlert(res.msg);
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
                                { alert && <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded w-1/2">{alert}</div> }
                                <button type="submit" className="flex border mt-8 rounded px-8 py-2 text-sm mx-auto border-indigo-500 text-indigo-500" disabled={isSubmitting}>Register</button>
                            </form>
                        )}
                    </Formik>
                    <div className="text-gray-500 text-center my-6">
                        Already have an account? <div className="inline text-indigo-500 cursor-pointer" onClick={() => router.push("/login")}>Login.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};