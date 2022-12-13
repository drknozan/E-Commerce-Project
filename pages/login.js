import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
    const router = useRouter();
    const [serverErorr, setServerErorr] = useState("");

    const formik = useFormik({
        initialValues: {
            email : "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address.').required('You have to provide email address.'),
            password: Yup.string()
                .required('Please enter password.')
        }),
        onSubmit: async (values) => {
            const res = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl: "/",
            });

            if (res.ok) {
                router.push("/");
            } else {
                setServerErorr("Invalid username or password.");
            }
        },
    });

    return (
        <div>
        <div className="flex h-screen w-screen">
            <div className="m-auto flex flex-col border border-indigo-500 w-1/2 h-3/5">
                <div className="my-auto">
                    <div className="my-6 text-gray-600 text-center text-2xl">
                        Login
                    </div>
                    <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
                        <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="block p-2 w-1/2 mt-8 bg-white border border-gray-400 rounded" placeholder="E-mail"></input>
                        { formik.errors.email && formik.touched.email ? <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded">{formik.errors.email}</div> : null }
                        <input id="password" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="block p-2 w-1/2 mt-8 bg-white border border-gray-400 rounded" placeholder="Password"></input>
                        { formik.errors.password && formik.touched.password ? <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded">{formik.errors.password}</div> : null }
                        { serverErorr && <div className="p-1 mt-1 text-sm text-red-700 bg-red-100 rounded">{serverErorr}</div> }
                        <button type="submit" className="flex border mt-8 rounded px-8 py-2 text-sm mx-auto border-indigo-500 text-indigo-500">Login</button>
                    </form>
                    <div className="text-gray-500 text-center my-6">
                        Don't have an account? <div className="inline text-indigo-500 cursor-pointer" onClick={() => router.push("/register")}>Register.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};