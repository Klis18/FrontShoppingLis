
export const Navbar = () => {
    return(
        <>
            <div className="navbar bar h-16 p-2 poppins-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg    xmlns="http://www.w3.org/2000/svg" 
                                height="24px" 
                                viewBox="0 -960 960 960" 
                                width="24px" fill="#FFFFFF">
                                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Damas</a></li>
                        <li><a>Caballeros</a></li>
                        <li><a>Niños</a></li>
                    </ul>
                    </div>
                    <img src="./images/logo.png" alt="logo" className="h-12"/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a>Damas</a></li>
                        <li><a>Caballeros</a></li>
                        <li><a>Niños</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="indicator mr-8">
                        <span className="indicator-item badge badge-secondary rounded-full">0</span>
                        <button className="mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                        </button>
                    </div>
                    <button className="p-2 rounded-md bg-white btn-color flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                        <span className="ml-2 poppins-regular hidden md:inline lg:inline xl:inline">Iniciar sesión</span>
                    </button>
                </div>
            </div>
        </>
    )
}