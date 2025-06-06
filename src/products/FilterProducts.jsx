
export const FilterProducts = ({genderSection}) => {

    const typeDress = (genderSection == 'Damas') ? 'Blusas' : 'Camisetas' 
    return(
        <>
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 mb-2">
                    <label className="flex items-center gap-2 border border-1 rounded-md pr-2 mr-2 grow">
                        <input type="text" className="grow p-2" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex items-center flex-wrap gap-2">
                    <button className="btn-categories rounded-full py-2 px-4">
                        {typeDress}
                    </button>
                    <button className="btn-categories rounded-full py-2 px-4">
                        Pantalones
                    </button>
                    <button className="btn-categories rounded-full py-2 px-4">
                        Calzado
                    </button>
                    <button className="btn-categories rounded-full py-2 px-4">
                        Accesorios
                    </button>
                </div>
            </div>
        </>
    )
}