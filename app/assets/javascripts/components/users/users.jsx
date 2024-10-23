const Users = ({ users }) => {
  return(
    <div>
      <h1>Users</h1>
      <a href="/users/new">Add User</a>
      <h2>{ users.length <= 0 ? "No Users" : "" }</h2>
      { users.map( (user) => ( <div key={user.id}>
          <a href={`/users/${user.id}`}>{UserFullName(user)}</a>
        </div>
        ))}
    </div>
  )
};
