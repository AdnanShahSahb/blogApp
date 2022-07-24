import "./modal.css"

const Modaling=(props)=>{

    return(
        <>
  
  <div className="row content">

    <div className="col-sm-12" >
      <br/>
      <img src={props.authorURL} className="float-left imaginging w-25 p-3"/>
      <button type="button" className="btn btn-secondary float-right" onClick={()=>{props.setOpenModal(false)}}>&#x2717;</button>
      <h2>{`${props.title[0].toUpperCase() + props.title.substring(1)}`}</h2>
      <h5><span className="glyphicon glyphicon-time"></span> Post by {props.author}, {props.date}</h5>
      
      <br/>
      <br/>
      <br/>
      <hr/>
      <p>{props.paras}</p>
    </div>
  </div>
<br/>

</>
    )
}

export default Modaling;