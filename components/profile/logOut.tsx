import { useRouter } from "next/router";
import { useUserAuth } from "../../utils/services";
import WhiteBtn from "../reusableComponents/whiteBtn";
const Logout = () => {
    const { logOut, user } = useUserAuth();
    const router = useRouter();
    const handleLogout = async () => {
      try {
        await logOut();
        router.push('/login'); 
      } catch (error) {
        console.log("error");
      }
    };
    return ( 
        <WhiteBtn onclick={handleLogout} label={"logout"}/>
        
     );
}
 
export default Logout;