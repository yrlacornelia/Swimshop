import { useState } from "react";
import WhiteBtn from "../reusableComponents/whiteBtn";
import Input from "../reusableComponents/inputfield";
import { useUserAuth } from "../../utils/services";
import { useRouter } from "next/router";
import Link from "next/link";
const SignUp = () => {
 
  const { signUp, user } = useUserAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const submit = async () => {
      try {
        await signUp(email, password);
        router.push('/profile'); 
      } catch (error) {
        console.log("error");
      }
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
    
    return ( <>
    <div className=" pb-10 pt-10">

    <h3 className="mb-2">SIGN UP </h3>
    <div className="mb-5">
    <Input type="email"  onChange={handleEmailChange} value={email}/>
    <Input type="password" onChange={handlePasswordChange}  value={password}/>
    </div>
    <WhiteBtn onclick={submit} label={"SIGN UP"} />
  </div>
    <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-2 text-gray-500">Or</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
    <div className="flex gap-2 mt-5"> 
       <p>already have an account? </p> 
    <Link className="underline" href="/profile/login">
   login here
      </Link></div>
    </> )
}
 
export default SignUp;