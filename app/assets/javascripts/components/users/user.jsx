const User = ({ user, courses, full_name }) => {
  const { id } = user;
  return(
    <div>
      <div className="user-card">
        <h1>{full_name}</h1>
        <hr />
        <h6>Courses</h6>
        <ul>
          { courses.map((course) => (
            <li>
              <a href={`/courses/${course.id}`}>{course.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => handleDeleteUser(user)}>
          <a href="/users">delete user</a>
        </button>
      </div>
    </div>
  )
};
