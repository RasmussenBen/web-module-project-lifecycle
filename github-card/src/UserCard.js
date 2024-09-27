import React from 'react'

class UserCard extends React.Component {
    render() {
        const { user } = this.props
 
        return (
            <div key={user.id} className = 'user'>
                <img src={user.avatar_url} alt='User avatar' />
                <h2>{user.name}</h2>
                <h3>Username: {user.login}</h3>
                <h3>Following: {user.following}</h3>
                <h3>Followers: {user.followers}</h3>
            </div>
        )
    }
}

export default UserCard