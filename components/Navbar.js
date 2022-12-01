import { useState } from "react";
import { BiShoppingBag, BiSearch, BiUser } from "react-icons/bi";
import logo from "../styles/logo.svg"
import { open } from "../store/reducers/sidebarSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState();

    const router = useRouter();
    const dispatch = useDispatch();
    
    const productsInBasket = useSelector(state => state.basket.productsInBasket);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/products/search?name=${searchInput}`);
    };

    return (
        <div className="bg-transparent container mx-auto flex p-5 border-b">
                <div className="container flex gap-10">
                    <Link href="/">
                        <div className="cursor-pointer flex items-center mr-10">
                            <Image src={logo} className="h-7" />
                        </div>
                    </Link>
                    <div className="relative inline-block group">
                        <div className="peer text-gray-600 cursor-pointer group-hover:underline group-hover:decoration-4 group-hover:decoration-indigo-400 hover:underline hover:decoration-indigo-400"> 
                            Man
                        </div>
                        <div className="hidden absolute top-6 z-10 peer-hover:block hover:block bg-white border-2 border-indigo-500 px-5 py-2">
                            <Link href="/products/search?type=tshirt&gender=man">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">T-shirt</button>
                            </Link>
                            <Link href="/products/search?type=sweatshirt&gender=man">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Sweatshirt</button>
                            </Link>
                            <Link href="/products/search?type=jacket&gender=man">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Jacket</button>
                            </Link>
                            <Link href="/products/search?type=suit&gender=man">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Suits</button>
                            </Link>
                            <Link href="/products/search?type=hat&gender=man">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Hats</button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative inline-block group">
                        <div className="peer text-gray-600 cursor-pointer group-hover:decoration-4 group-hover:underline group-hover:decoration-indigo-400"> 
                            Woman
                        </div>
                        <div className="hidden absolute top-6 z-10 peer-hover:block hover:block bg-white border-2 border-indigo-500 px-5 py-2">
                            <Link href="/products/search?type=tshirt&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">T-shirt</button>
                            </Link>
                            <Link href="/products/search?type=sweatshirt&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Sweatshirt</button>
                            </Link>
                            <Link href="/products/search?type=jacket&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Jacket</button>
                            </Link>
                            <Link href="/products/search?type=dress&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Dress</button>
                            </Link>
                            <Link href="/products/search?type=hat&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Hats</button>
                            </Link>
                            <Link href="/products/search?type=skirt&gender=woman">
                                <button className="my-5 block text-gray-500 cursor-pointer hover:decoration-4 hover:underline hover:decoration-indigo-400">Skirt</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <form className="flex" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" className="border border-gray-400 text-gray-700 text-sm rounded px-5 py-1 mr-4" placeholder="Search" required></input>
                    <button type="submit">
                        <BiSearch size={24} className="text-gray-500 cursor-pointer mr-5" />
                    </button>
                </form>
                <BiUser size={30} className="text-gray-500 cursor-pointer mr-5" onClick={() => router.push("/settings")} />
                <BiShoppingBag size={30} className="text-gray-500 cursor-pointer" onClick={() => dispatch(open())}/>
                <div className="flex items-center justify-center bg-indigo-500 w-4 h-4 text-[10px] rounded-full text-gray-100">{productsInBasket.length}</div>
        </div>
    )
};

export default Navbar;