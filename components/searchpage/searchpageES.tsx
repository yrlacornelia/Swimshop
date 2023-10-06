
type Props = {
    item: any;
};
const SearchPageEmpty = ({ item }: Props) => {
console.log(item)
   
    
    return ( <>
        <div className="text-center">
            <h2>Search result for "{item}"</h2> 
            <div>
       <p>no results found</p>
        </div>
        </div>
        </> );
}

export default SearchPageEmpty;