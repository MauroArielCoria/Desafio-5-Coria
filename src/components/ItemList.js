//Es un agrupador de un set de componentes Item.js 
//(Deberías incluirlo dentro de ItemListContainer del desafío 3)
import Item from "./Item"

function ItemList ({ items }) {
    
    return (
        <main>
            <button>Ver detalle del Producto</button>
            <ul>
                {items.map((itemArray)=>{
                    <Item datos={itemArray} />
                })}
            </ul>
        </main>
    );
} 

export default ItemList;
