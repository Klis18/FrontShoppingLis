
export const ProductItem = ({product}) => {
    return <div className="rounded-xl shadow-lg">
                <div className="w-full">
                    <img src={product.image} alt="imagen" className="w-full h-40 rounded-t-xl"/>
                </div>
                <div className="px-4 py-2 text-center">
                    <p className="font-medium">{product.title}</p>
                    <p className="text-xl font-bold">${product.price}</p>
                    <button className="w-full py-2 text-center text-white bar rounded-md mt-2">
                        Agregar al carrito
                    </button>
                </div>
            </div>
}