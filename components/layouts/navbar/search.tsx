
const Searchbar = () => {
    return (<><div className="relative z-1 ">
    <div className="absolute top-3 right-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
 </svg></div>
<div className="border-b border-black">
        <label>
        <input  size={30}
          required
    className="p-2 text-sm  border-none bg-transparent outline-none  w-full "
          type="text"
          value={"Sök här.."} />
    </label>
</div>
   
    </div></>  );
}
 
export default Searchbar;

// className="p-2 bg-none bg-transparent outline-none  border-black border-b "