import React, { Component,Fragment } from 'react'
import './Sidebar.css'
import $ from 'jquery'
import {connect} from 'react-redux'
import {NavLink}   from 'react-router-dom'

 class SideBar extends Component {
     constructor(props) {
         super(props)
          
 
         this.state = {
              
         }
     }
     

    showModel=()=>{
            $('#articleForm').modal('show');
    }

   
    render() {
        
        return (
            <React.Fragment>
            <div  className="sidebar">
                     <span> <button onClick={()=>this.showModel()}><i class="fas fa-plus"></i></button></span>
                       <span> <button><i class="fas fa-sync"></i></button></span>
                       <span> <button><i class="fas fa-cog"></i></button></span>
                      
             
                      <div>
                         <ul>
                               <li><button><i class="far fa-sticky-note"></i></button>all notes</li>
                               {/* <li><button><i class="far fa-id-card"></i></button>profile</li> */}
                               <li><NavLink to="/profile" className="active"><i class="far fa-id-card"></i>profile</NavLink></li>
                               
                               <li><NavLink to="/favourite" className="active"><i class="far fa-star"></i>favourites</NavLink></li>
                               {/* <li><button><i class="fas fa-trash"></i></button> trash</li> */}
                               <li><NavLink to="/trash" className="active"><i class="fas fa-trash"></i>trash</NavLink> </li>
                              
                         </ul>
                         </div>
                         <div>
                             <p className= "para">catogery</p>
                             {this.props.categories.map(category => {
                return (
                    <ul>
                  <li >
                    <button className="btn btn-block btn-dark text-left" href="./">
                      <i className="las mr-2 la-folder"></i>
                      {category}
                    </button>
                  </li>
                  </ul>
                )
              })}
                         </div>
                         </div> 
                
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    categories: [...new Set(state.artr.articles.map(article => {
      return article.category
    }))]})



export default connect(mapStateToProps)(SideBar) ;
