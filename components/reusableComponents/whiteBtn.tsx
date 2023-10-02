   
   interface Props {
        label?: string;
        onclick: React.MouseEventHandler<HTMLButtonElement>;
      }
const WhiteBtn = ({ onclick, label }:Props) => {

    return (<>
<button onClick={onclick}  className="bg-white mt-5 text-black  py-2 px-10 rounded-sm rounded w-45"
   >
     {label}
      </button>
    </>  );
}
 
export default WhiteBtn;