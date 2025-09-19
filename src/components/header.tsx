export default function header(){
    return (
        <header className="header absolute w-full 
        flex flex-row px-8 py-8 justify-between bg-black text-white items-center">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="menu flex flex-row">
                <nav className="">
                    <ul className="flex flex-row gap-5">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}