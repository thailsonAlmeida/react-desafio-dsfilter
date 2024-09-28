type Props ={
    id: number,
    name: string,
    price: number,
}
export default function CardProduct( {name, price} : Props){
    return(
        <>
            <div className="cad-listing">
                <h2>{name}</h2>
                <p>{price}</p>
            </div> 
        </>
    );
}