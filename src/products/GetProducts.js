export const getProducts = async() =>{
        const url = `https://api.escuelajs.co/api/v1/products`;
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);

        const productos = data.map((producto) => ({
            id: producto.id,
            image: producto.images[0],
            title: producto.title,
            price: producto.price
        }))
        return productos;
}