import { useRouter } from "next/router";
import { useState } from "react";

const Filters = () => {
    const router = useRouter();

    const [filters, setFilters] = useState({
        gender: [],
        type: [],
        color: [],
    });

    const handleChange = (e) => {
        const filter = e.target.value;
        
        if (e.target.checked) {
            switch(filter) {
                case "man":
                case "woman":
                    setFilters({...filters, gender: [...filters.gender, filter] });
                    break;
                case "tshirt":
                case "sweatshirt":
                case "jacket":
                case "dress":
                case "skirt":
                case "suit":
                case "jean":
                case "pant":
                case "hat":
                    setFilters({...filters, type: [...filters.type, filter] });
                    break;
                case "black":
                case "white":
                case "red":
                case "blue":
                    setFilters({...filters, color: [...filters.color, filter] });
                    break;
            };
        } else {
            switch(filter) {
                case "man":
                case "woman":
                    let arrGender = [...filters.gender];
                    let indexSelectedG = arrGender.indexOf(filter);
                    arrGender.splice(indexSelectedG, 1);
                    setFilters({...filters, gender: arrGender });
                    break;
                case "tshirt":
                case "sweatshirt":
                case "jacket":
                case "dress":
                case "skirt":
                case "suit":
                case "jean":
                case "pant":
                case "hat":
                    let arrType = [...filters.type];
                    let indexSelectedT = arrType.indexOf(filter);
                    arrType.splice(indexSelectedT, 1);
                    setFilters({...filters, type: arrType });
                    break;
                case "black":
                case "white":
                case "red":
                case "blue":
                    let arrColor = [...filters.color];
                    let indexSelectedC = arrColor.indexOf(filter);
                    arrColor.splice(indexSelectedC, 1);
                    setFilters({...filters, color: arrColor });
                    break;
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let navigateUrl = `/products/search?`;

        if (filters.gender.length > 0) {
            navigateUrl += `gender=${filters.gender.join(',')}`;
        }
        if (filters.type.length > 0) {
            if (navigateUrl.endsWith("?")) {
                navigateUrl += `type=${filters.type.join(',')}`;
            } else {
                navigateUrl += `&type=${filters.type.join(',')}`;
            }
        }
        if (filters.color.length > 0) {
            if (navigateUrl.endsWith("?")) {
                navigateUrl += `color=${filters.color.join(',')}`;
            } else {
                navigateUrl += `&color=${filters.color.join(',')}`;
            }
        }

        router.push(navigateUrl);
    };

    return (
        <div>
            <div className="" onSubmit={handleSubmit}>
                <form className="border border-indigo-400 rounded-lg p-5 m-5 shadow-sm">
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="man" type="checkbox" onChange={handleChange}  className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Man</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="woman" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Woman</label>
                    </div>
                    <div className="flex items-center m-2 mt-10">
                        <input id="male-checkbox" value="tshirt" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">T-shirt</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="sweatshirt" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Sweatshirt</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="jacket" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Jackets</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="dress" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Dress</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="skirt" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Skirt</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="suit" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Suits</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="jean" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Jeans</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="pant" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Pants</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="hat" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Hats</label>
                    </div>
                    <div className="flex items-center m-2 mt-10">
                        <input id="male-checkbox" value="black" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Black</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="white" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">White</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="red" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Red</label>
                    </div>
                    <div className="flex items-center m-2">
                        <input id="male-checkbox" value="blue" type="checkbox" onChange={handleChange} className="w-4 h-4 accent-indigo-600"></input>
                        <label htmlFor="man-checkbox" className="ml-3 text-sm text-gray-700">Blue</label>
                    </div>
                    <button type="submit" className="border border-indigo-500 rounded-lg px-6 py-2 mt-5 text-md text-indigo-500">Filter</button>
                </form>
            </div>
        </div>
    );
};

export default Filters;