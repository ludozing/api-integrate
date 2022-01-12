import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiUser = () => {
    // 상태관리하기 1. 요청의 결과 2. 로딩 상태 3. 에러
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const fetchUsers = async () => {
        try{
            // users 초기화, error 초기화, loading 초기화
            setUsers(null);
            setLoading(null);
            setError(null);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            setUsers(response.data);
        }
        catch(e){   // 에러가 발생하면 실행, 첫번째 파라미터로 에러 값이 삽입됨
            // 에러 번호를 확인하고 싶다면, e.response.status를 console.log 하면 그 번호가 반환된다.
            console.log(e.response.status);
            setError(e);
        }
        setLoading(false);
    }
    // 렌더링 될 때 axios 사용해서 데이터를 받음
    useEffect(()=>{
        fetchUsers();
    },[])
    // 로딩 중이라면?
    if(loading) return <div>로딩 중...</div>
    // 에러가 발생했다면?
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <button onClick={fetchUsers}>리트</button>
        </div>
    );
};

export default ApiUser;