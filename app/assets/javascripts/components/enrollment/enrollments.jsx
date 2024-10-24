
const Enrollments = ({ course, teachers, tas, students, users }) => {
  const displayUser = ( id ) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name
      }
    })
    return fullName;
  };

  return(
    <div>
      <h1>{course.name}</h1>
      <a href={`/courses/${course.id}/enrollments/new`}>Add Enrollment</a>
      <br/>
      <h2>Teachers</h2>
      <p>{ teachers.length <= 0 ? "No Teachers" : ''}</p>
      { teachers.map((t) => (
        <div key={t.user_id}>
          <p>{displayUser(t.user_id)}</p>
          <button onClick={() => handleDeleteEnrollment(course, t.id)}>
            <a href={`/courses/${course.id}/enrollments/`}>delete</a>
          </button>
        </div>
      ))}
      <h2>Ta's</h2>
      <p>{ tas.length <= 0 ? "No Ta's" : ''}</p>
      { tas.map((ta) => (
        <div key={ta.user_id}>
          <p>{displayUser(ta.id)}</p>
          <button onClick={() => handleDeleteEnrollment(course, ta.id)}>
            <a href={`/courses/${course.id}/enrollments/`}>delete</a>
          </button>
        </div>
      ))}
      <h2>Students</h2>
      <p>{ students.length <= 0 ? "No Students" : ''}</p>
      { students.map((s) => (
        <div key={s.id}>
          <p>{displayUser(s.user_id)}</p>
          <button onClick={() => handleDeleteEnrollment(course, s.id)}>
            <a href={`/courses/${course.id}/enrollments/`}>delete</a>
          </button>
        </div>
      ))}
    </div>
  );
};
