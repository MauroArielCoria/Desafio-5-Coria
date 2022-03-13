import Navbar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer"


const App =() => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting="Hola"/>
            <Footer/>
        </>
    )
}


export default App
