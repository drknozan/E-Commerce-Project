import { BsFillBagCheckFill, BsFillCreditCardFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addNewProduct, addExistingProduct } from "../../../store/reducers/basketSlice";
import clientPromise from "../../../lib/mongodb";
import { useState } from "react";

export default function ProductDetails({ product }) {
    const [size, setSize] = useState("S");
    const dispatch = useDispatch();

    const productsInBasket = useSelector(state => state.basket.productsInBasket);

    const handleRadioChange = (e) => {
        setSize(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let productCount = 1;
        if (productsInBasket.find((e) => e.name === product.name && e.size === size)) {
            let selectedProduct = productsInBasket.find((e) => e.name === product.name);
            productCount = selectedProduct.count;
            productCount++;
            dispatch(addExistingProduct({ name: product.name, imageUrl: product.imageUrl, size: size, price: product.price, count: productCount,index: productsInBasket.length }));
        } else {
            dispatch(addNewProduct({ name: product.name, imageUrl: product.imageUrl, size: size, price: product.price, count: productCount,index: productsInBasket.length }));
        }
    }

    return (
        <div className="h-screen">
            <div className="flex container mx-auto">
                <div className="">
                    <img className="h-[calc(100vh*8/10)] w-[calc(100vw*1/3)] object-cover rounded m-4" src={product.imageUrl} />
                </div>
                <div className="text-center mx-auto mt-10">
                    <div className="text-3xl text-gray-700">
                        {product.name}
                    </div>
                    <div className="mx-48 mt-5">
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                    </div>
                    <form className="mt-24" onSubmit={handleFormSubmit}>
                        <div className="flex border rounded border-indigo-500 p-5">
                            <div className="flex items-center mx-5">
                                <input id="size-s" name="size-radio" type="radio" value="S" onChange={handleRadioChange} className="accent-indigo-500 w-4 h-4 bg-indigo-500 border-indigo-500"></input>
                                <label htmlFor="size-s" className="mx-2 text-md text-gray-700">S</label>
                            </div>
                            <div className="flex items-center mx-5">
                                <input id="size-m" name="size-radio" type="radio" value="M" onChange={handleRadioChange} className="accent-indigo-500 w-4 h-4 bg-indigo-500 border-indigo-500"></input>
                                <label htmlFor="size-m" className="mx-2 text-md text-gray-700">M</label>
                            </div>
                            <div className="flex items-center mx-5">
                                <input id="size-l" name="size-radio" type="radio" value="L" onChange={handleRadioChange} className="accent-indigo-500 w-4 h-4 bg-indigo-500 border-indigo-500"></input>
                                <label htmlFor="size-l" className="mx-2 text-md text-gray-700">L</label>
                            </div>
                            <div className="flex items-center mx-5">
                                <input id="size-xl" name="size-radio" type="radio" value="XL" onChange={handleRadioChange} className="accent-indigo-500 w-4 h-4 bg-indigo-500 border-indigo-500"></input>
                                <label htmlFor="size-xl" className="mx-2 text-md text-gray-700">XL</label>
                            </div>
                            <div className="flex items-center mx-5">
                                <input id="size-xxl" name="size-radio" type="radio" value="XXL" onChange={handleRadioChange} className="accent-indigo-500 w-4 h-4 bg-indigo-500 border-indigo-500"></input>
                                <label htmlFor="size-xxl" className="mx-2 text-md text-gray-700">XXL</label>
                            </div>
                        </div>
                        <button type="submit" className="flex mt-20 border border-indigo-500 rounded px-8 py-2 my-4 text-sm text-indigo-500 mx-auto group hover:bg-indigo-500 hover:text-white active:bg-indigo-700">
                            Add
                            <BsFillBagCheckFill className="ml-2 fill-indigo-500 group-hover:fill-white" size={18} />
                        </button>
                        <a to="/order">
                            <button className="flex mt-4 border border-indigo-500 rounded px-8 py-2 my-4 text-sm text-indigo-500 mx-auto group hover:bg-indigo-500 hover:text-white active:bg-indigo-700">
                                Buy Now
                                <BsFillCreditCardFill className="ml-2 fill-indigo-500 group-hover:fill-white" size={18} />
                            </button>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    try {
        const client = await clientPromise;
        const db = client.db("e_commerce");
    
        let product = await db
          .collection("products")
          .find({ "productCode": id })
          .limit(1)
          .toArray();

        product = product.map((product) => { const { _id, ...rest } = product; return rest});
        product = product[0];

        return {
            props: { product }
        }
    } catch (error) {
        console.log(error);
    }
}