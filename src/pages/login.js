import {auth,authProvider} from "../firebaseConfig.js"
import {  signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./login.css"


const Login=({setIsAuth})=>{

    let navigating=useNavigate();
    const signingIn=()=>{

        
        authProvider.setCustomParameters({
            prompt:"select_account"
        })

        signInWithPopup(auth,authProvider).then((that)=>{
            localStorage.setItem("isAuthing",true)
            setIsAuth(true);
            navigating("/createPost")
        })
    }

    
    return(
        <>
        <h2 className="my-5">SignIn to Continue</h2>
        <div>
            <span onClick={signingIn} href="/#" className="btn btn-outline-dark " id="anchoring" role="button" >
      <img className="imaging"  alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      Login with Google
    </span>
        </div>
        </>
    )

}
export default Login;