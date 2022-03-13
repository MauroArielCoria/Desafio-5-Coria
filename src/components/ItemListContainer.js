import ItemList from "./ItemList"
import storage from "./storageItems"
import { useEffect, useState } from "react"

const ItemListContainer = ( props ) => {

    const [loading, setLoading] = useState(true)
    const [items, setProductos] = useState([])

    useEffect(() => {

    const pedido = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(storage)
        },2000)

            pedido.then(resultado=>{
            setProductos(resultado)
        })
        })
    },[])

    return (
    <main>
        <h2>{props.greeting}</h2>
        <h2>¿Cuántos zapatos va a comprar?</h2>
        <ItemList items={items}/>
    </main>
    );
    }

export default ItemListContainer