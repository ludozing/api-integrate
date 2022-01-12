import React, { useEffect, useReducer } from 'react';
import React from 'react';

function reducer(state, action){
    switch(action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state;
    }
}
function ApiUsersReducer() {
    // 상태 관리하기
    // useReducer(함수, 초기값)
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    })
    const fetchUsers = async () => {
        try{
            // users 초기화, error 초기화, loading 초기화
            setUsers(null);
            setLoading(null);
            setError(null);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            // 요청이 성공했을 때
            dispatch({type: 'SUCCESS', data: response.data});
        }
        catch(e){   // 에러가 발생하면 실행, 첫번째 파라미터로 에러 값이 삽입됨
            // 에러 번호를 확인하고 싶다면, e.response.status를 console.log 하면 그 번호가 반환된다.
            console.log(e.response.status);
            dispatch({type: 'ERROR', error: e});
        }
    }
    // 렌더링 될 때 호출
    useEffect(()=>{
        fetchUsers();
    })
    const {loading, error, data: users} = state;
    // 로딩 중이라면?
    if(loading) return <div>로딩중...</div>
    // 에러가 발생했다면?
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            
        </div>
    );
}

export default ApiUsersReducer;