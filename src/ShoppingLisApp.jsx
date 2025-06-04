import { useEffect, useState } from "react"
import { ProductItem } from "./products/ProductItem";
import { getProducts } from "./products/GetProducts";

export const ShoppingListApp =  () =>{

    const [products, setProducts] = useState([]);
    //     [
    //     {
    //         id: 1,
    //         imagen: "https://img.freepik.com/foto-gratis/bastante-joven-estilo-hipster-vestida-jeans-camiseta-aislado-sobre-fondo-blanco-pelo-rizado_285396-2995.jpg?ga=GA1.1.121685742.1720130301&semt=ais_items_boosted&w=740",
    //         productName: "Blusa",
    //         price:10
    //     },
    //      {
    //         id: 2,
    //         imagen: "https://img.freepik.com/foto-gratis/mujer-llevando-sundress_23-2150388738.jpg?ga=GA1.1.121685742.1720130301&semt=ais_items_boosted&w=740",
    //         productName: "Vestido",
    //         price:15
    //     },
    // ]

    useEffect(()=>{
        getProducts()
            .then(NewProducts => setProducts(NewProducts));
    }, []);


    return(
        <>
            <div className="bar w-full h-16 p-2">
                <img src="./images/logo.png" alt="logo" className="h-full"/>
            </div>

            <div className="py-12 px-8">
                <h1 className="text-3xl">Productos</h1>
                <hr />

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