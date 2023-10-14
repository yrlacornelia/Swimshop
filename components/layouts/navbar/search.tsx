import { useEffect, useState } from "react";
import router from "next/router";
const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number>(-1); // Initialize with -1


//    const getProducts = () => {
//     getDocs(colRef)
//     .then((snapshot) => {
//     let arr:any = []
//     snapshot.docs.forEach((doc) => {
//       arr.push({...doc.data(), id: doc.id})
//     })
    
//     })
//     .catch(err => {
//       console.log(err.message)
//     })

// }

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
  ];

  const handleChange = (e:any) => {
    setSearchInput(e.target.value);
  };
  const navigation = () => {
    router.push(`/search/${searchInput}`);
  };
  const filteredCountries = countries.filter((country) => {
    const searchTerm = searchInput.toLowerCase();
    return (
      country.name.toLowerCase().includes(searchTerm) ||
      country.continent.toLowerCase().includes(searchTerm)
    );
  });
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigation();
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestion((prevIndex) =>
        prevIndex < firstThreeFilteredCountries.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === "Enter" && selectedSuggestion !== -1) {
      event.preventDefault();
      const selectedCountry = firstThreeFilteredCountries[selectedSuggestion];
      setSearchInput(selectedCountry.name); // Set the input field with the selected suggestion
      router.push(`/search/${selectedCountry.name}`); // Navigate to the selected suggestion
    }
    else{
      console.log("HGU")
    }
  };
  const firstThreeFilteredCountries = filteredCountries.slice(0, 3);
  return (
    <div className="flex flex-col">
      <div className="relative z-1">
        <div className="absolute top-3 right-1">
          <button  onClick={() => navigation()}> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg></button>
         
        </div>
        <div className="border-b border-black">
          <label>
            <input
              size={30}
              required
              className="p-2 text-sm border-none bg-transparent outline-none w-full"
              type="text"
              onChange={handleChange}
              value={searchInput}
              placeholder="Search "
              onKeyDown={handleKeyDown}
            />
          </label>
        </div>
        <div className="absolute bg-white w-full border z-40">
        {searchInput !== "" && (
          <ul className="absolute bg-white w-full border z-40">
            {firstThreeFilteredCountries.map((item, index) => (
              <li
                key={index}
                className={`hover:bg-grey ${selectedSuggestion === index ? "bg-blue-200" : ""}`}
              >
                <button
                  className="text-sm w-full text-left"
                  onClick={() => {
                    setSearchInput(item.name); // Set the input field with the selected suggestion
                    router.push(`/search/${item.name}`); // Navigate to the selected suggestion
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
     
      </div>

    </div>
  );
};

export default Searchbar;
