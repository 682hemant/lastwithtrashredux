import React from 'react'
import {connect} from 'react-redux'
import ArticleTitle from '../components/ArticleTitle';
import SideBar from '../components/SideBar';
import './Trash.css'

 function Trash(props) {
    //  console.log(props.trs);
    
    return (
        <div>       
            <div className="container-fluid">
                <div className="row">
                 <div className="col-2 " style={{paddingLeft:'0',paddingRight:'0'}}>
                 <SideBar/>
                 </div>
                 <div className="col-3 " style={{paddingLeft:'0'}}>
                    
            {props.trs.map(trash=>{if(trash!==undefined){
                     return <ArticleTitle title={trash.title}/>}})}
                     </div>
                     </div>
                     </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        trs:state.artr.Trash
    }
}


export default connect(mapStateToProps)(Trash)
