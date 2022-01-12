function CreateUser({username, userage, onChange, onCreate}){
  return (
    <div>
      <input name="username" value={username} onChange={onChange} />
      <input name="userage" value={userage} onChange={onChange} />
      <button onClick={onCreate}>등록</button>      
    </div>
  )
}
export default CreateUser;