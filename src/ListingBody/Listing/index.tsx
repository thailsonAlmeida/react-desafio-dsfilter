import './styles.css';
import { ProductDTO } from '../../dtos/ProductDTO.tsx';

type Props = {
    product : ProductDTO;
}

export default function Listing( { product } : Props){
    return(
        <>        
            <div className="cad-listing">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div> 
        </>
    );
}