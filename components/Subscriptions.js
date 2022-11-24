import { BiMailSend } from "react-icons/bi";

const Subscription = () => {

    return (
        <div className="container items-center mx-auto p-4 mt-32">
            <div className="text-gray-700 text-3xl text-center">
                Get 15% discount.
            </div>
            <div className="text-gray-500 text-l text-center">
                Subscripe to the newsletter and get %15 discount.
            </div>
            <form className="flex flex-col items-center my-8">
                <input type="email" className="rounded border border-gray-400 shadow-sm focus:border-gray-500 h-12 px-7 my-4" placeholder="E-mail"></input>
                <button type="submit" className="flex border border-indigo-400 rounded p-2 text-sm text-indigo-500 mx-auto group hover:bg-indigo-500 hover:text-white active:bg-indigo-700">
                    Subscribe
                    <BiMailSend className="fill-indigo-500 group-hover:fill-white" size={18} />
                </button>
            </form>
        </div>
    );
}

export default Subscription;
