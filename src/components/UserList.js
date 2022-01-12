import User from "./User"
function UserList ({users}){

  return (
    <div>
      { users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}
export default UserList;