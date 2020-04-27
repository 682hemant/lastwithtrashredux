import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import logo from '../assets/hem.jpeg'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-2 " style={{ paddingLeft: 0 }}>
              <SideBar />
            </div>
            <div className="col-10" style={{ paddingRight: 0 }} >
              <div className="row">
                <div className="col-3 shadow p-3 mb-5 bg-white rounded">
                  <img src={logo} className="photo" alt="myimage" style={{ borderRadius: '50%' }} />
                  <h6> my profile </h6>
                </div>
                <div className="col-7">
                  
                  <table className="table " style={{textAlign:'center'}}>
                    <thead>
                      <tr>

                       My profile
                       

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">FirstName</th>
                        {this.props.prof.map(profile => <td>{profile.firstName}</td>)}


                      </tr>
                      <tr>
                        <th scope="row">Lastname</th>
                        {this.props.prof.map(profile => <td>{profile.lastName}</td>)}

                      </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                      <tr>
                        <th scope="row">email</th>
                        {this.props.prof.map(profile => <td>{profile.emaill}</td>)}

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    prof: state.sgn.users
  }
}

export default connect(mapStateToProps)(Profile)