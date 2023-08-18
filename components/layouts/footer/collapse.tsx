import WhiteBtn from "@/components/reusableComponents/whiteBtn";
import {
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);
  const toggleOpenSecond = () => setOpenSecond((openSecond) => !openSecond);

  const help = () => {
    return (
      <>    <div className="mt-2">

        <ul>
          <li>My account</li>
          <li>Customer service</li>
          <li>Contact</li>
          <li>Legal and privacy</li>
        </ul>
      </div>
      </>
    )
  }
  const information = () => {
    return (<>
      <div className="mt-4">

        <ul>
          <li>About Dive Haven</li>
          <li>Career at Dive Haven</li>
          <li>Press</li>
        </ul></div></>)

  }
  const newsletter = () => {
    return (<div className="">
      <h4>Receive our newsletter</h4>
      <input></input>
      <div className="mt-5 flex flex-col items-center justify-center">   <p>Follow us!</p>
        <div className="flex mt-2 gap-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div></div>


    </div>)
  }

  return (<>

    <div className="bg-grey md:justify-between md:flex-row border px-10 flex  flex-col py-5 ">
      <div className="text-center md:w-1/4"><h2>DIVE HAVEN</h2></div>

      <div className="flex flex-col md:hidden">
        <h4 className="" onClick={toggleOpen} >Help</h4>
        {open && <div >
          {help()}
        </div>}
        <h4 className="" onClick={toggleOpenSecond} >Corporate Information</h4>
        {openSecond && <div >
          {information()}
        </div>}
        {newsletter()}
      </div>


      <div className="md:flex hidden justify-between  w-2/3 ">
        <div><h4>Help</h4>      {help()}</div>
        <div><h4>Corporate Information</h4> {information()} </div>

        {newsletter()}

      </div>
    </div>
  </>);
}

export default Dropdown;