import React from 'react'
import './ArticalTitle.css';

export default function ArticleTitle(props) {
    return (
        <div     onClick={props.showArea}  className="articaltitle"   >
            <h4>{props.title}</h4> 
            <button onClick={props.clicked}><i class="fas fa-trash"></i></button> 
            <button onClick={props.EditArticle}  >  <i class="far fa-edit"></i> </button>
            <hr />
           
        </div>
    )
}
