import { useRouter } from "next/router";
import Image from "next/image";

const NewArrivals = () => {
    const router = useRouter();

    return(
        <div className="flex container mx-auto h-screen">
            <div className="w-1/2 my-auto">
                <div className="text-gray-700 text-4xl text-center">
                    New Arrivals.
                </div>
                <div className="text-gray-400 text-xl text-center">
                    Discover the best collections.
                </div>
            </div>
            <div className="w-1/2 grid grid-rows-2 gap-6 h-3/4 mt-12">
                <div className="relative row-start-1 row-end-3 cursor-pointer" onClick={() => router.push("/products")}>
                    <Image unoptimized className="rounded-lg object-cover" fill src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="newArrivals" />
                </div>
                <div className="relative row-start-1 row-end-2 cursor-pointer" onClick={() => router.push("/products")}>
                    <Image unoptimized className="rounded-lg object-cover" fill src="https://images.unsplash.com/photo-1598687208091-86eb2c537547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="newArrivals" />
                </div>
                <div className="relative row-start-2 row-end-3 cursor-pointer" onClick={() => router.push("/products")}>
                    <Image unoptimized className="rounded-lg object-cover" fill src="https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="newArrivals" />
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;