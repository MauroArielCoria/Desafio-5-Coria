/*import { useState } from "react"

const ItemCount = (props) => {

    const inicial = 1
    const stock = 5

    let [estado, setEstado] = useState(inicial)

    const handleSumar = () => {
        if(estado < stock){
        setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > inicial){
        setEstado(estado - 1)
        }
    }
    
    const handleResetear = () => {
        setEstado(0)
    }

    return (
        <main>
            <p>Quiero agregar a mi carrito = {estado}</p>
            <button onClick={handleSumar}>SUMAR</button>
            <button onClick={handleRestar}>RESTAR</button>
            <button onClick={handleResetear}>VOLVER A 0</button>
        </main>
    );
}

export default ItemCount;
*/