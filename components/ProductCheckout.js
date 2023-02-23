import { BiTrash } from "react-icons/bi";
import { deleteProduct } from "../store/reducers/basketSlice";
import { useDispatch } from "react-redux";

const ProductCheckout = ({ name, imageUrl, size, price, count, index, productCode }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex">
            <img className="w-36 h-48 object-cover m-4 rounded" src={imageUrl} />
            <div className="mt-1">
                <div className="text-l text-gray-800 m-2">
                    {name}
                </div>
                <div className="text-xs text-gray-500 m-2">
                    Product Code: {productCode}
                </div>
                <div className="text-sm text-gray-600 m-2">
                    Size: {size}
                </div>
                <div className="text-sm text-gray-600 m-2">
                    Count: {count}
                </div>
                <div className="text-sm text-gray-600 m-2">
                    {price}
                </div>
            </div>
            <div>
                <BiTrash onClick={() => dispatch(deleteProduct({ name: name, imageUrl: imageUrl, size: size, index: index }))} size={24} className="my-2.5 mx-8 cursor-pointer fill-indigo-500 hover:fill-indigo-600 active:fill-indigo-400"/>
            </div>
        </div>
    );
};

export default ProductCheckout;