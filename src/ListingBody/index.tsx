import Filter from "./Filter";
import Listing from "./Listing";
import *as productService from "../services/product-service.ts"
import { useContext, useEffect, useState } from "react";
import { ContextProductCount } from "../utils/context-products-header.ts";

export default function ListingBody(){
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);
    const {setContextProductCount} = useContext(ContextProductCount)

    function onFilter(newMinValue: number, newMaxValue: number){        
        
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);

        if(newMaxValue == 0){
            setMaxValue(Number.MAX_VALUE)
        }

    }

    useEffect(()=>{
        setContextProductCount(productService.findByPrice(minValue, maxValue).length);
    },[minValue, maxValue, setContextProductCount])


    return (
        <>          
            
            <section className="container-listing-body">                                             
                <Filter onFilter={onFilter} />

                <section className="container card">
                    {
                        productService.findByPrice(minValue, maxValue).map((n) => <Listing key={n.id} product={n} />)
                    }
                </section>
            </section>
            
        </>
    );
}