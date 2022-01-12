import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import useInputs from './hooks/useInputs';
import './App.css';
import React, { useRef, useReducer } from "react"

const initialState = {
  users: [
    {id:1, username: '그린', age: 30, member:false},
    {id:2, username: '블루', age: 31, member:false},
    {id:3, username: '옐로', age: 32, member:false},
    {id:4, username: '레드', age: 33, member:false}  
  ]
}

function reducer(state,action){
  switch(action.type){
    case 'CREATE_USER':
      return {
        users: [
          ...state.users,
          action.user
        ]
      };
    case 'MEMBER_TOGGLE':
      return {
        users: state.users.map(user=>
          user.id === action.id ? {...user, member: !user.member} : user)
      }
      case 'MEMBER_DELETE':
        return {
          users: state.users.filter(user=>user.id!==action.id)
        }
    default:
      return state;
  }
}

// UserDispatch라는 Context를 생성하고 내보내기
export const UserDispatch = React.createContext(null); 
function App() {
  const [ {username, userage}, onChange, reset] = useInputs({
    username: '',
    userage: ''
    })
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;
  const nextId = useRef(5);

  function onCreate(){
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username: username,
        age: userage,
        member: false
      }
    })
    nextId.current = nextId.current + 1;
  }

  return (
    // UserDispatch.Provider로 감싸야 함
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        <CreateUser username={username} userage={userage} onChange={onChange} onCreate={onCreate} />
        <UserList users={users} />    
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
