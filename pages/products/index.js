import Head from "next/head";
import Filters from "../../components/Filters";
import Product from "../../components/Product";
import { connectToDatabase } from "../../lib/mongodb";

export default function Products({ products }) {

    return (
        <div>
            <Head>

            </Head>
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

export async function getServerSideProps() {
    try {
        const { database } = await connectToDatabase();
    
        let products = await database
          .collection("products")
          .find({})
          .limit(10)
          .toArray();

        products = products.map((product) => { const { _id, ...rest } = product; return rest});
        return {
            props: { products }, 
        }
    
    } catch (error) {
        console.log(error);
    }
}

