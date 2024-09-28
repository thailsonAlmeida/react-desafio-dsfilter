import { useState } from "react";
import Header from "./Components/Header";
import ListingBody from "./ListingBody";
import *as productService from "./services/product-service.ts";
import { ContextProductCount } from "./utils/context-products-header";

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(productService.findByPrice(Number.MIN_VALUE, Number.MAX_VALUE).length)
  
  return (
    <>
      <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
        <Header totalProducts={contextProductCount} />
        <ListingBody />
      </ContextProductCount.Provider>
    </>
    
  );
}

export default App
