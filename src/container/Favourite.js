import React, { Component } from 'react'
import {connect} from 'react-redux'
import SideBar from '../components/SideBar';
import ArticleTitle from '../components/ArticleTitle';

 class Favourite extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
             
        }
    }
    
    render() {
        // console.log(this.props.fav);
        return (
            <div>  <div className="container-fluid">
                <div className="row">
                    <div className="col-2" style={{paddingLeft:'0',paddingRight:'0'}}>
                <SideBar />
                </div>
                <div className="col-3" style={{paddingLeft:'0'}}>
                {this.props.fav.map(article=><ArticleTitle title={article.title}/>)}
                </div>
                </div>
                </div>
              
               
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      fav:state.artr.articles.filter(favt=>favt.favourite)
    }
}
export default connect(mapStateToProps)(Favourite)
