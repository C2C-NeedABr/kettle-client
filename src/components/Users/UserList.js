import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Avatar } from '@material-ui/core'
import './UserList.css'
import apiUrl from '../../apiConfig'
import Sidebar from '../Sidebar/Sidebar'
import Layout from '../Layout/Layout'

class UserList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/users`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ users: res.data.users }))
      .catch(console.error)
  }

  render () {
    const users = this.state.users.map(user => (
      <div key={user._id} className="tweets">
        <div className="contactCard">
          <Avatar></Avatar>
          <Link className="user-link" to={`/profile/${user._id}`}>{user.email}</Link>
        </div>
      </div>
    ))

    return (
      <Layout>
        <div className='app'>
          <Sidebar
            user={this.props.user}
            setPostId={this.props.setPostId}
          />
          <ul>
            {users}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default UserList
