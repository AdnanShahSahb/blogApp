import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Carding from "../comps/card";
import { auth, db } from "../firebaseConfig";
import Modaling from "../comps/modal";

const Home = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [modalForAll,setModalForAll]=useState(true);

  const postCollectionRef = collection(db, "posts/");

  const [postArray, setPostArray] = useState([]);
  // {
  //   date: "date",
  //   authorURL: "authorURL",
  //   title: "title",
  //   para: "para",
  //   authorName: "vtMApWVKLgYbBQ1P5fR62oqf8mA2",
  //   id: "id1",
  // },
  // {
  //   date: "date",
  //   authorURL: "authorURL",
  //   title: "title",
  //   para: "para",
  //   authorName: "adnan shah",
  //   id: "id2",
  // },
  // {
  //   date: "date",
  //   authorURL: "authorURL",
  //   title: "title",
  //   para: "para",
  //   authorName: "vtMApWVKLgYbBQ1P5fR62oqf8mA2",
  //   id: "id3",
  // },
  // {
  //   date: "date",
  //   authorURL: "authorURL",
  //   title: "title",
  //   para: "para",
  //   authorName: "vtMApWVKLgYbBQ1P5fR62oqf8mA2",
  //   id: "id4",
  // },
  const [readyToPass, setReadyToPass] = useState([]);
  

  const deleteModal = async (specId) => {
    // console.log(specId);

    const postToDel = doc(db, "posts", specId);
    await deleteDoc(postToDel);
  };

  useEffect(() => {
    const fetchingData = async () => {
      const data = await getDocs(postCollectionRef);

      setPostArray(
        data.docs.map((thatData) => ({ ...thatData.data(), id: thatData.id }))
      );
      
    };

    fetchingData();
  }, [deleteModal]);

  const handleModal = (specData) => {
    setModalOpen(true);
    setReadyToPass(specData);
  };
  // console.log(postArray);
  // console.log(props.accLoggedIn);
  // console.log(props.accLoggedIn);
  // console.log(postArray);

  const myPost_allPostFunc=(thatPost)=>{

    return(
  
  <Carding
    deletingModal={deleteModal}
    onClick={handleModal}
    delBtnShow={modalForAll}
    date={thatPost.date}
    authorURL={thatPost.authorURL}
    title={thatPost.title}
    paras={thatPost.para}
    author={thatPost.authorName}
    postImgUrl={thatPost.postImgUrl}
    id={thatPost.id}
  />
    )
  }


  return (
    <>

      <div className="container">
      
      
        {modalOpen ? (
          <Modaling
            setOpenModal={setModalOpen}
            date={readyToPass.date}
            authorURL={readyToPass.authorURL}
            title={readyToPass.title}
            paras={readyToPass.paras}
            author={readyToPass.author}
          />
        ) : (
          <>

      <div className="btn-group text-center my-5">
        <button type="button" className="btn btn-secondary active mr-3" onClick={()=>{setModalForAll(true)}}>
          All Posts
        </button>
        <button type="button" className="btn btn-secondary mr-3 " onClick={()=>{setModalForAll(false)}}>
          My Posts
        </button>
      </div>

      {modalForAll?<h1 className="my-2">"All Posts"</h1>:<h1 className="my-2">"My Posts"</h1>}
          <div className="row" id="parentOfCard">
            
            {postArray.map((thatPost) => {console.log();
                return (
                  <>
                  <div className="col-sm-4" key={thatPost.id}>
                  {modalForAll?myPost_allPostFunc(thatPost) :(props.accLoggedIn && thatPost.authorId === auth.currentUser.uid && myPost_allPostFunc(thatPost) )}
                  </div>

                  
                  </>
                );
            })}
          </div>
          </>

        )}
        


        {!props.accLoggedIn && !modalForAll && "You Need to Login First " }
        
        {props.accLoggedIn && !modalForAll  && document.getElementById("parentOfCard") && postArray.length===0 && document.getElementById("parentOfCard").children.length===0 && "Empty | Create to Add " }

        {modalForAll && postArray.length===0 && "No Post" }

      
      </div>
      
    </>
  );
};
export default Home;
