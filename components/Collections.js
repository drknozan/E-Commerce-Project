import Link from "next/link";

const Collections = () => {
    
    return(
        <div className="container mx-auto flex">
            <div className="w-1/3">
                <div className="text-xl text-center text-gray-600">
                    T-shirts
                </div>
                <Link href="/products/search?type=tshirt">
                    <div className="p-4 hover:opacity-90 transition-all cursor-pointer">
                        <img className="rounded-lg object-cover h-96 w-full" src="https://images.unsplash.com/photo-1523585298601-d46ae038d7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                    </div>
                </Link>
            </div>
            <div className="w-1/3">
                <div className="text-xl text-center text-gray-600">
                    Sweatshirts
                </div>
                <Link href="/products/search?type=sweatshirt">
                    <div className="p-4 hover:opacity-90 transition-all cursor-pointer">
                        <img className="rounded-lg object-cover h-96 w-full" src="https://images.unsplash.com/photo-1572986339313-6fb01aa14717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                    </div>
                </Link>
            </div>
            <div className="w-1/3">
                <div className="text-xl text-center text-gray-600">
                    Jeans
                </div>
                <Link href="/products/search?type=jean">
                    <div className="p-4 hover:opacity-90 transition-all cursor-pointer">
                        <img className="rounded-lg object-cover h-96 w-full" src="https://images.unsplash.com/photo-1616178193482-4dad15347c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Collections;