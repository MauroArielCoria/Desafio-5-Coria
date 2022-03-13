//Es un componente destinado a mostrar información breve del producto que el user clickeará luego para 
//acceder a los detalles (los desarrollaremos más adelante)

function Item( {datos} ){
    return(
        <>
        <h1>{datos.title}</h1>
        <h2>{datos.price}</h2>
        </>
        )
}


export default Item;
