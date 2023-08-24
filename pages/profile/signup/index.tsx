import { useRouter } from "next/router";
import Login from "../../../components/profile/logIn";
import SignUp from "../../../components/profile/signUp";
import { useEffect } from "react";
import { useUserAuth } from "../../../utils/services";
import Loader from "../../../components/reusableComponents/loader";

const SignUpPage = () => {
    const {user}  = useUserAuth();
    const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/profile'); 
    }
  }, [user]);
  console.log("HI")
    return ( 
        <>
         {!user ? (
         <div className="flex flex-col">
    <SignUp />
    </div>
    ):        (<><Loader/></>) } </>
 );
}
 
export default SignUpPage;