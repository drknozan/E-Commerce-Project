import ProductCheckout from "./ProductCheckout";
import { BiWindowClose } from "react-icons/bi";
import { BsCreditCardFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../store/reducers/sidebarSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const productsInBasket = useSelector(state => state.basket.productsInBasket);
    const display = useSelector(state => state.sidebar.display);

    if (display) {
        return (
            <div className="border border-l-2 border-indigo-600 h-screen fixed z-10 top-0 right-0 bg-white overflow-x-hidden w-96 transition-all shadow-xl">
                <BiWindowClose className="absolute right-0 top-0 fill-indigo-600 cursor-pointer" size={30} onClick={() => dispatch(close())} />
                <div className="text-indigo-500 text-center text-2xl mt-8">
                    Bag
                </div>
                <div className="overflow-y-scroll overflow-x-hidden mt-12">
                    {productsInBasket && productsInBasket.map((product) => {
                        return <ProductCheckout name={product.name} imageUrl={product.imageUrl} size={product.size} count={product.count} index={product.index} key={product.index} productCode={product.productCode} />
                    })}
                </div>
                <div onClick={() => router.push("/order")}>
                    <button type="submit" className="flex mt-4 border border-indigo-500 rounded px-8 py-2 my-4 text-sm text-indigo-500 mx-auto group hover:bg-indigo-500 hover:text-white active:bg-indigo-700">
                        <Link href="/order">
                            <div className="flex">
                                Buy now
                                <BsCreditCardFill className="ml-2 fill-indigo-500 group-hover:fill-white" size={20} />
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"h-screen fixed z-10 top-0 right-0 bg-slate-400 overflow-x-hidden w-0 transition-all"}>
            </div>
        )
    }
};

export default Sidebar;