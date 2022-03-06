//Es un agrupador de un set de componentes Item.js 
//(Deberías incluirlo dentro de ItemListContainer del desafío 3)

import item from "./Item"
import { useEffect, useState } from "react"

function ItemList ({ items }) {

    const [loading, setLoading] = useState(true)
    const [items, setProductos] = useState([])
    
        useEffect(() => {
            console.log("Ejecutando useEffect")
    
            const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(item)
            },2000)
        })
        pedido
        .then((resultado)=>{
            console.log("Estuvo bien")
            setProductos(resultado)
        })
        .catch((error)=>{
            console.log("Estuvo mal")
        })
    },[])
    
    return (
        <main>
            <button onClick={() => setLoading(!loading)}>Ver detalle del Producto</button>
            <ul>
                {items.map((item)=>{
                    return {item}
                })}
            </ul>
        </main>
    );
}

export default ItemList;
