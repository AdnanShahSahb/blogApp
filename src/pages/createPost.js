import "./createPost.css"
import { useRef } from "react";
import {auth, db} from "../firebaseConfig"
import {addDoc, collection} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreatePost = (props) => {

    const navigating=useNavigate();


    const userTitle=useRef();
    const userPostImgUrl=useRef();
    const userPara=useRef();

    var title,para,date,postImgUrl,time;


    const handleForm=(e)=>{
    e.preventDefault();
    
        title=userTitle.current.value;
        postImgUrl=userPostImgUrl.current.value;
        para=userPara.current.value;
        date=new Date().toDateString();
        time=new Date().toLocaleTimeString();

        if(title=== ""){
            alert('title required')
            return false;
        }
        else{}

        if(postImgUrl=== ""){
            alert('url required')
            return false;
        }
        else{}
        
        if(para===null || para===""){
            alert('paragraph required')
            return false;
        }
        else{}


        const refPostCollection=collection(db,"posts")

        const createPost= async()=>{
            await addDoc(refPostCollection,{title,para,time,date,postImgUrl,authorName:auth.currentUser.displayName,authorId:auth.currentUser.uid,authorURL:auth.currentUser.photoURL})
    
        }
        createPost();
        navigating("/")
        // console.log(auth.currentUser.displayName);

    
    }

    

    useEffect(()=>{
        if(!props.isAuth)
        navigating("/")
        console.log(props.isAuth);
    },[])

    
  return (
    <>
     <div className="container">
	<div className="row ">
	    
	    <div className="col-md-8 col-md-offset-2">
	        
    		<h1 className="my-5">Create post</h1>
    		
    		<form>
    		    
    		    <div className="form-group">
    		        <label >Title <span className="require">*</span></label>
    		        <input type="text" className="form-control" ref={userTitle} />
    		    </div>

    		    <div className="form-group">
    		        <label >Image URL <span className="require">*</span></label>
    		        <input type="text" className="form-control" ref={userPostImgUrl} />
    		    </div>
    		    
    		    <div className="form-group">
    		        <label >paragraph <span className="require">*</span></label>
    		        <textarea rows="5" className="form-control" ref={userPara} ></textarea>
    		    </div>

                
    		    
    		    <div className="form-group">
    		        <button type="submit" className="btn btn-primary" onClick={handleForm}>
    		            Create
    		        </button>
    		    </div>
    		    
    		</form>
		</div>
		
	</div>
</div>
    </>
  );
};
export default CreatePost;
