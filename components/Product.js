import { useRouter } from "next/router";

const Product = ({ name, imageUrl, price, productCode }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${productCode}`);
    };

    return (
        <div className="m-5 items-center mx-auto cursor-pointer" onClick={handleClick}>
            <div>
                <img className="w-72 h-96 object-cover rounded" src={imageUrl} />
            </div>
            <div className="text-gray-600" href="#">
                {name}
            </div>
            <div className="text-gray-500">
                {price}
            </div>
        </div>
    );
};

export default Product;