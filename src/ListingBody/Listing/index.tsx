import './styles.css';
import { ProductDTO } from '../../dtos/ProductDTO.tsx';
import CardProduct from '../../Components/CardProducts/index.tsx';

type Props = {
    product : ProductDTO;
}

export default function Listing( { product } : Props){
    return(
        <>   
            <CardProduct id={product.id} name={product.name} price={product.price} />
        </>
    );
}