import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiUser = () => {
    // 상태관리하기 1. 요청의 결과 2. 로딩 상태 3. 에러
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
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
        </div>
    );
};

export default ApiUser;