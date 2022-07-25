
import "./card.css"

const Carding=(props)=>{
  const handlePassing=()=>{

    props.onClick(props);
  }

  const handlePassToDel=()=>{
    
    props.deletingModal(props.id)
  }




return(

<>
<div className="card" key={props.id} >
  <img src={props.postImgUrl} className="img-fluid"/>
<div className="card-inner">
  <div className="header">
    <h2>{`${props.title[0].toUpperCase() + props.title.substring(1)}`}</h2>
    
 <br/>
  <p  className="text-right font-italic"><span className="float-left"> {props.date} </span> <img src={props.authorURL} className="authorDP w-25 p-3" />  BY {props.author} </p> 
  
  <div className="content text-left ">
  <p>{`${props.paras.substring(0, 100)}...`}<a className="link" onClick={handlePassing} role="button">View all</a></p>
</div>
</div>

{!props.delBtnShow && <button type="button" className="btn btn-secondary btn-sm" onClick={handlePassToDel}>Delete
</button>}




  </div>
</div>
</>


    )
}

export default Carding;