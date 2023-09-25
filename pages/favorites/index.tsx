import AddedFavorites from "@/components/favorites/addedFavorites";

const Favorites = () => {
    return ( <div className="flex flex-col items-center">
        <AddedFavorites/>
    <h3>Favorites</h3>
    <p className="w-1/3 py-2">Du har inte sparat något ännu. Oroa dig inte, det är lätt! Klicka bara på hjärtsymbolen vid önskade artiklar så visas de här.</p>
    </div> );
}
 
export default Favorites;