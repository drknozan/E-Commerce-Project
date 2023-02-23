import Image from "next/image";
import { useRouter } from "next/router";

const Product = ({ name, imageUrl, price, productCode }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${productCode}`);
    };

    return (
        <div className="m-5 items-center mx-auto cursor-pointer" onClick={handleClick}>
            <div className="relative w-72 h-96">
                <Image className="object-cover rounded" fill src={imageUrl} />
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