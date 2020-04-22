import React from 'react'
import {connect} from 'react-redux'

function Area(props) {
    return (
        <div className="area">
            <p>{props.gtr}</p>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        gtr:state.artr.showArticle.article
    };
};

export default connect(mapStateToProps)(Area)