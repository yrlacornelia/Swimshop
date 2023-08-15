const Searchbar= () => {
    return ( <>

        <label>
        <input  size={30}
          required
    className="p-2 bg-none bg-transparent outline-none  border-black border-b "
          type="search"
          value={"sök här.."} />
    </label>

   
    </> );
}
 
export default Searchbar;