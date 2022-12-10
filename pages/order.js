import ProductCheckout from "../components/ProductCheckout";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getSession } from "next-auth/react";

export default function Order() {
    const productsInBasket = useSelector(state => state.basket.productsInBasket);
    let totalBill = 0;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email : "",
            phoneNumber: "",
            country: "",
            city: "",
            address: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Please provide first name."),
            lastName: Yup.string().required("Please provide last name."),
            email: Yup.string().email("Invalid email address.").required("Please provide email."),
            phoneNumber: Yup.string().required("Please provide phone number."),
            country: Yup.string().required("Please provide country."),
            city: Yup.string().required("Please provide city."),
            address: Yup.string().required("Please provide address."),
        }),
        onSubmit: values => {
            
        },
    });

    return (
        <div>
            <Head>

            </Head>
            <div className="container mx-auto h-screen mt-5">
                <div className="flex">
                    <div className="w-1/2">
                        {productsInBasket.length > 0 && productsInBasket.map((product) => {
                            totalBill += parseInt(product.count) * parseInt(product.price.trim().replace("$", ''));
                            return <ProductCheckout name={product.name} imageUrl={product.imageUrl} size={product.size} price={product.price} count={product.count} index={product.index} key={product.index} />
                        })}
                    </div>
                    <div className="w-1/2 h-max p-8 text-center border-2 border-indigo-500 rounded">
                        <div className="text-gray-600 text-2xl mb-4">
                            Total: {totalBill} $
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex text-gray-500">
                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className="block p-2 w-full text-gray-700 bg-gray-50 rounded border-2" 
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                    />
                                    {formik.errors.firstName && formik.touched.firstName ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.firstName}</div> : null}
                                </div>

                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className="block p-2 w-full text-gray-700 bg-gray-50 rounded border-2" 
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                    />
                                    {formik.errors.lastName && formik.touched.lastName ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.lastName}</div> : null}
                                </div>
                            </div>

                            <div className="flex text-gray-500">
                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        className="block p-2 w-full text-gray-700 bg-gray-50 border-2"
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && formik.touched.email ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.email}</div> : null}
                                </div>

                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        className="block p-2 w-full text-gray-700 bg-gray-50 border-2" 
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phoneNumber}
                                    />
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.phoneNumber}</div> : null}
                                </div>
                            </div>

                            <div className="flex text-gray-500">
                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        className="block p-2 w-full text-gray-700 bg-gray-50 border-2" 
                                        id="country"
                                        name="country"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                    />
                                    {formik.errors.country && formik.touched.country ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.country}</div> : null}
                                </div>

                            
                                <div className="mx-auto mt-6 text-sm">
                                    <label htmlFor="city">City</label>
                                    <input
                                    className="block p-2 w-full text-gray-700 bg-gray-50 border-2" 
                                    id="city"
                                    name="city"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    />
                                    {formik.errors.city && formik.touched.city ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.city}</div> : null}
                                </div>
                            </div>
                            
                            <div className="mx-auto mt-6 text-sm text-gray-500">
                                <label htmlFor="address">Address</label>
                                <input
                                    className="block p-6 w-full text-gray-700 bg-gray-50 border-2" 
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                />
                                {formik.errors.address && formik.touched.address ? <div className="p-1 mt-2 text-sm text-red-700 bg-red-100 rounded">{formik.errors.address}</div> : null}
                            </div>

                            <button type="submit" className="flex mt-8 border border-indigo-500 rounded px-8 py-2 text-sm text-indigo-500 mx-auto">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}