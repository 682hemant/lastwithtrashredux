import React, { Component ,Fragment} from 'react'
import SideBar from '../components/SideBar'
import './Layout.css'
import ArticalForm from '../components/ArticalForm'
import {articleCreate, showArea,deleteArticle ,articleUpdate} from '../redux/actions/index'
import {connect} from 'react-redux'
import ArticleTitle from '../components/ArticleTitle'
import Area from '../components/Area';
import $ from 'jquery'
import {reset} from 'redux-form'

 class Layout extends Component {
   constructor(props) {
   super(props)
   this.onCreateArticle = this.onCreateArticle.bind(this);
  
 }
 
       

  onCreateArticle(values){
    if(!this.props.tempArticle.id ){
      this.props.onCreateArticle(values)
    }
    else {
      this.props.onUpdateArticle( values)
    }
    $('#articleForm').modal('hide');
     this.props.onResetForm()
  }
       

    render() {
        return (
            <React.Fragment>
            <ArticalForm
            onSubmitArticle = {this.onCreateArticle}
          />
            <div  className="continer-fluid">
                <div className="row">

                    <div className="col-2 sibebar " style={{paddingRight:'0'}} > 
                      <SideBar />
                      </div> 
                      <div className="col-3 title " style={{paddingLeft:'0'}}>
                         {this.props.articleTitle.map(titles=>
                            <ArticleTitle 
                              id={titles.id}
                               title={titles.title} 
                               showArea={()=>this.props.onShowArea(titles.id)} 
                               clicked={() => this.props.onRemovedArticle(titles.id)}      
                               EditArticle={()=>this.props.onEditArticle(titles.id)}
                               clickStar={()=>this.props.onClickStar(titles.id)}
                               />
                             
                               )}
                        </div> 
                       <div className="col-7">
                         <Area />
                         </div>  
                      </div>

                </div>
                </React.Fragment>
           
        )
    }
}
const mapStateToProps=state=>{
  return{
      articleTitle:state.artr.articles,
      editing:state.artr.editing,
      tempArticle:state.artr.article
  }
} 
const mapDispatchToProps=dispatch=>{
  return{
    onShowArea:id=>dispatch(showArea(id)),
     onCreateArticle:values=>((dispatch(articleCreate({article:values}))),$('#articleForm').modal('hide')),
    onRemovedArticle: id => dispatch(deleteArticle(id)),
    onEditArticle:articleId=>((dispatch({type: 'ARTICLE_LOAD', payload:{articleId}})),$('#articleForm').modal('show')),
    onUpdateArticle:values=>dispatch(articleUpdate(values)),
    onClickStar:articleId=>dispatch({type:'ARTICLE_FAVOURITE',payload:{articleId}}),
    onResetForm:()=>dispatch(reset("articleForm"))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);
