/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './styles.css';

type FormData = {
    minValue: number,
    maxValue: number,
}

type Props = {
    onFilter : Function
}

export default function Filter({onFilter} : Props) {
    
    const [formData, setFormData] = useState<FormData>({
        minValue: Number.MIN_VALUE,
        maxValue: Number.MAX_VALUE
    });

    function handleInputChange(event : any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    function handleFormSubmit(event : any){
        event.preventDefault();
        onFilter(formData.minValue, formData.maxValue);
    }

    return (
        <>
            <main className="container card">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input 
                            type="number" 
                            name="minValue"          
                            placeholder="Preço mínimo"                                                        
                            onChange={handleInputChange}
                        />                    
                    </div>
                    <div>
                        <input 
                            type="number" 
                            name="maxValue" 
                            placeholder="Preço máximo"                                                         
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Filtrar</button>
                </form>                
            </main>
        </>
    );
}