   
   interface Props {
        label?: string;
        onclick: React.MouseEventHandler<HTMLButtonElement>;
      }
export const WhiteBtn = ({ onclick, label }:Props) => {

    return (<>
<button onClick={onclick}  className="bg-white mt-5 text-black  py-2 px-10 rounded-sm rounded w-45"
   >
     {label}
      </button>
    </>  );
}
export const PinkBtn = ({ onclick, label }:Props) => {

  return (<>
<button onClick={onclick}  className="bg-white mt-5 text-black  py-2 px-10 rounded-sm rounded w-45"
 >
   {label}
    </button>
  </>  );
}
export const BlackBtn = ({ onclick, label }:Props) => {

  return (<>
<button onClick={onclick}  className="bg-gray-900 mt-5 text-white  py-2 px-10 rounded-sm rounded "
 >
   {label.toUpperCase()}
    </button>
  </>  );
}
 