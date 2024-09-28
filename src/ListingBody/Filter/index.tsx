import './styles.css';

export default function Filter(){
    return (
        <>
            <main className="container card">
                <form>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Preço mínimo"
                            name="" 
                            id="" 
                        />                    
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Preço máximo"
                            name="" 
                            id="" 
                        />
                    </div>
                    <button type="submit">Filtrar</button>
                </form>                
            </main>
        </>
    );
}