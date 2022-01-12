import React, { useContext } from "react"
import { UserDispatch } from '../App';
function User({user}){
  const dispatch = useContext(UserDispatch);
  return (
    <p>{user.member ? "회원": "회원아님"} 이름: {user.username}, 나이: {user.age}
    <button onClick={()=> {dispatch({type: 'MEMBER_TOGGLE', id: user.id})}}>활동체크</button>
    <button onClick={()=> {dispatch({type: 'MEMBER_DELETE', id: user.id})}}>삭제</button>
    </p>
  )
}
export default User;