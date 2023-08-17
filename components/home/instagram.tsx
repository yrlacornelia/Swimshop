import Image from "next/image";


const Instagram = () => {
    return ( <> 
    <h3>
        Do you want to be here? 
        #DiveHaven in your instagram post
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-5 items-center md:items-start">
            <div className="border"> <Image alt="insta" width={400} src="/images/noimage.png" height={300} />
            </div>
            <div className="" >
            <div className="flex gap-5 w-full justify-center "><Image alt="insta" width={200} className="w-1/3" src="/images/noimage.png" height={200} /> <Image alt="insta" width={200} className="w-1/3" src="/images/noimage.png" height={200} /></div> 
            <div className="flex gap-5 w-full justify-center mt-5"><Image alt="insta" width={200} className="w-1/3" src="/images/noimage.png" height={200} /> <Image alt="insta" width={200} className="w-1/3" src="/images/noimage.png" height={200} /></div> 
            </div>
        </div>
    </> );
}
 
export default Instagram;


// https://www.instagram.com/p/Cv-Ps3ZRuxj/?igshid=MzRlODBiNWFlZA==

