import { getAuth, updateProfile } from "firebase/auth";
import Logout from "./logOut";
import { useEffect } from "react";
import { db } from "@/firebaseConfig";
const MyProfile = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    
    useEffect(() => {
        if (!user ) {
         console.log("NEJ")
        }
        else{
            const displayName = user.displayName;
  const email = user.email;
console.log(displayName)
console.log(email)
        }
      }, [user]);

      const testUpdate = () => {
        if (user ){
        updateProfile(user, {
            displayName: "yrlas "
          }).then(() => {
            console.log("profile updated")
          }).catch((error) => {
            console.log("does not work ")
          });}
      }
      const saveData = () => {
        
//const favoriteRef = db.collection("favorites").doc(user);

      }

    return(
<>
{/* <button className="p-5 bg-blue" onClick={testUpdate}>testa</button>
<button onClick={saveData}>save data</button> */}
<div className="flex flex-col  items-center"><h1>Välkommen</h1>
<p>du kan se dina favoriter <a href="" className="underline">här</a> </p>
<Logout /></div>


</>
    )
       

}
 
export default MyProfile;