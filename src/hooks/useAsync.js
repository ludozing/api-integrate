import React, { useEffect, useReducer } from "react";

// LOADING, SUCCESS, ERROR
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
// callback은 api를 호출하는 함수 (apiUserReducer에서 다운로드 받는 함수)
// deps는 값이 변경되었을 때 그 값을 넣어줌
function useAsync(callback, deps=[]){
    // 상태 관리하기
    // useReducer(함수, 초기값)
    const [ state, dispatch ] = useReducer(reducer,{
        loading: false,
        data: null,
        error: null
    })
    const fetchData = async () => {
        try{
            // users 초기화, error 초기화, loading true
            dispatch({type: 'LOADING'})
            const data = await callback()
            // 요청이 성공했을 때
            dispatch({type: 'SUCCESS', data: data});
        }
        catch(e){   // 에러가 발생하면 실행, 첫번째 파라미터로 에러 값이 삽입됨
            // 에러 번호를 확인하고 싶다면, e.response.status를 console.log 하면 그 번호가 반환된다.
            console.log(e.response.status);
            dispatch({type: 'ERROR', error: e});
        }
    }
    // 렌더링 될 때 호출
    useEffect(()=>{
        fetchData();
    },[])
    return [state,fetchData];
}

export default useAsync;