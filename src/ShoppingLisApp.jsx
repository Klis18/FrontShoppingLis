import { useEffect, useState } from "react"
import { ProductItem } from "./products/ProductItem";
import { getProducts } from "./products/GetProducts";
import { Navbar } from "./shared/Navbar";
import { FilterProducts } from "./products/FilterProducts";

export const ShoppingListApp =  () =>{

    const [products, setProducts] = useState([]);


    useEffect(()=>{
        getProducts()
            .then(NewProducts => setProducts(NewProducts));
    }, []);


    return(
        <>
            {/* <div className="bar w-full h-16 p-2">
                <img src="./images/logo.png" alt="logo" className="h-full"/>
            </div> */}
            <Navbar></Navbar>

            <div className="py-12 px-8">
                <h1 className="text-3xl">Productos</h1>
                <hr />
                <div className="pt-4 pb-2">
                <FilterProducts genderSection={'Damas'}/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-12 xl:gap-12 mt-4">
                    {products.map(
                        product =>(
                            <ProductItem product={product} key={product.id}/>
                        ))
                    }
                </div>
            </div>

        </>
    )
}