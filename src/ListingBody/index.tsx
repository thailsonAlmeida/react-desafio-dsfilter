import Header from "../Components/Header";
import Filter from "./Filter";
import Listing from "./Listing";

export default function ListingBody(){
    return (
        <>
            <Header />

            <section className="container-listing-body">
                <Filter />
                <Listing />
            </section>
            
        </>
    );
}