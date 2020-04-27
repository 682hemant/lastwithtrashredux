import React from 'react'
import './ArticalTitle.css';

export default function ArticleTitle(props) {
    return (
        <div onClick={props.showArea}  className="articaltitle"   >
           <button onClick={props.clickStar}>  <i class="far fa-star"></i></button>
               <h4 className="heading">{props.title}     </h4> 
            <button onClick={props.clicked}><i class="fas fa-trash"></i></button> 
            <button onClick={props.EditArticle}  >  <i class="far fa-edit"></i> </button>
            <hr />
           
        </div>
    )
}
