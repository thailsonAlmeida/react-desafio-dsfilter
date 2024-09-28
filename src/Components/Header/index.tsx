
import './styles.css';

type Props = {
    totalProducts : number;
}

export default function Header( { totalProducts } : Props){
    return(
        <header>
            <div className='container'>
                <h1>DSFilter</h1>
                <p>{totalProducts} produto(s)</p>
            </div>
        </header>
    );
}