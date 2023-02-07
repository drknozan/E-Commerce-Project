import Filters from "../../components/Filters";
import Product from "../../components/Product";
import clientPromise from "../../lib/mongodb";

export default function Products({ products }) {

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-1/4">
                        <Filters />
                    </div>
                    <div className="w-3/4 pb-20">
                        <div className="grid grid-cols-3">
                            {products.length > 0 && products.map((product, i) => {
                                    return <Product name={product.name} imageUrl={product.imageUrl} price={product.price} productCode={product.productCode} key={i} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    try {
        const client = await clientPromise;
        const db = client.db("e_commerce");
        
        const { gender, type, color, name } = context.query;
        
        const queryParameters = {};

        if (gender) {
            let queries = gender.split(",");
            if (queries.length > 1) {
                queryParameters.$or = queries.map((query) => { return {"gender": query}})
            } else {
                queryParameters.gender = gender;
            }
        }
        if (type) {
            let queries = type.split(",");
            if (queries.length > 1) {
                queryParameters.$or = queries.map((query) => { return {"type": query}})
            } else {
                queryParameters.type = type;
            }
        }
        if (color) {
            let queries = color.split(",");
            if (queries.length > 1) {
                queryParameters.$or = queries.map((query) => { return {"color": query}})
            } else {
                queryParameters.color = color;
            }
        } 
        if (name) {
            let regex = new RegExp(name)
            queryParameters.name = {$regex: regex, $options: "i"};
        } 

        let products = await db
            .collection("products")
            .find(queryParameters)
            .limit(12)
            .toArray();

        products = products.map((product) => { const { _id, ...rest } = product; return rest});
        
        return {
            props: { products }, 
        }
    } catch (error) {
        console.log(error);
    }
}