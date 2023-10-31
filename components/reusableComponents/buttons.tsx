   
   interface Props {
        label?: string;
        onclick: React.MouseEventHandler<HTMLButtonElement>;
      }
export const WhiteBtn = ({ onclick, label }:Props) => {

    return (<>
<button onClick={onclick}  className="bg-white mt-5 text-black shadow py-2 px-10 rounded-sm rounded w-45"
   >
  <h5>{label}</h5> 
      </button>
    </>  );
}
export const PinkBtn = ({ onclick, label }:Props) => {

  return (<>
<button onClick={onclick}  className="bg-pink-light w-full mt-5 text-white shadow-md  py-2 px-10 rounded-sm rounded w-45"
 >
  <h5>{label}</h5> 
    </button>
  </>  );
}
export const BlackBtn = ({ onclick, label }:Props) => {

  return (<>
<button onClick={onclick}  className="bg-gray-900 mt-5 text-white shadow py-2 px-10 rounded-sm rounded "
 >
  <h5>{label}</h5> 
    </button>
  </>  );
}
 