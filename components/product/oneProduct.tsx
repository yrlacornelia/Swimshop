import Searchbar from "../layouts/navbar/search";
import SlideShow from "./components/slider";

const OneProduct = () => {
  return (<>
    <div className="flex flex-col md:flex-row mt-5 ">
      <SlideShow />
      <div className="flex flex-col  p-10 md:p-0 md:w-1/3 md:mr-10">
        <div className="flex gap-10 justify-between ">
          <p className="font-light"> nike</p> <p className="font-semibold">299 kr</p>
        </div>
        <p className="font-semibold mb-5">Freestyler bikini </p>

        <Searchbar />
        <div className="mb-5 mt-5">
          <p>color</p></div>
        <Searchbar />
        
        <h4 className="mt-7 mb-2">Product description</h4>
        <h4>bikini lorem</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nulla malesuada sollicitudin sapien, diam sit non. Quis erat tristique quis nunc. Lectus amet in nascetur pretium risus massa sapien. Sed leo imperdiet id risus lacinia duis odio.</p>
        <div className="flex gap-2 mt-2">        
          <h4 >Composititon:</h4>
          <p>96% Polyester and 4% Spandex</p> 
          </div>

      </div>
      <div></div>


    </div>


  </>);
}

export default OneProduct;