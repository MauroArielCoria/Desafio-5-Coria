import CartWidget from "./CartWidget"

const Navbar =() => {
    return (
            <header id="layout-header" className="header">
                <h1 className="header__title">Calzados Silvia</h1>
                <CartWidget/>
                <nav className="nav">
                    <a href="#" className="nav__link">Ojotas</a>
                    <a href="#" className="nav__link">Zapatos</a>
                    <a href="#" className="nav__link">Pantuflas</a>
                </nav>
            </header>
    )
}

export default Navbar