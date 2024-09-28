import Header from "../Components/Header";
import Filter from "./Filter";
import Listing from "./Listing";
import *as productService from "../services/product-service.ts"
import { useEffect, useState } from "react";

export default function ListingBody(){
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);
    const [totalProducts, setTotalProducts] = useState(productService.findByPrice(minValue, maxValue).length);

    function onFilter(newMinValue: number, newMaxValue: number){        
        
        setMinValue(newMinValue);
        setMaxValue(newMaxValue);

        if(newMaxValue == 0){
            setMaxValue(Number.MAX_VALUE)
        }
        
    }

    useEffect(() => {
        setTotalProducts(productService.findByPrice(minValue, maxValue).length)
    },[minValue, maxValue])

   

    return (
        <>
            <Header totalProducts={totalProducts} />             
            
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