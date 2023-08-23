import Searchbar from "../layouts/navbar/inputfield";
import SlideShow from "./components/slider";

const OneProduct = () => {
    return ( <>
    <div className="flex flex-col md:flex-row justify-center ">
      <SlideShow/>
        <div className="flex flex-col mt-20  w-1/3">
          <div className="flex gap-10 justify-between">
            <p>nike</p><p><b>299 kr</b></p>
            </div>
            <p><b>Freestyler bikini</b></p>
            <Searchbar />
            <p>color</p>
            <button className="w-10 bg-pink "></button>
            <Searchbar />
            <h3>Product description</h3>
            <p><b>bikini lorem</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nulla malesuada sollicitudin sapien, diam sit non. Quis erat tristique quis nunc. Lectus amet in nascetur pretium risus massa sapien. Sed leo imperdiet id risus lacinia duis odio.</p>
            <h3>details</h3>
            <p><b>Composititon: </b>96% Polyester and 4% Spandex
<br></br><b>Brand: </b><br></br>
<b>Color:</b> Pink </p>
        </div>
        <div></div>


    </div>
    
    
    </> );
}
 
export default OneProduct;