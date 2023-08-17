const Searchbar= () => {
    return ( <div className="relative">
    <div className="absolute top-3 right-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
 </svg></div>

        <label>
        <input  size={30}
          required
    className="p-2 text-sm bg-white outline-none border-gray border w-full "
          type="text"
          value={"Sök här.."} />
    </label>

   
    </div> );
}
 
export default Searchbar;

// className="p-2 bg-none bg-transparent outline-none  border-black border-b "