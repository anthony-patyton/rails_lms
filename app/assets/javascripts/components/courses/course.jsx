const Course = ({ course }) => {
  const { id, name } = course;
  return(
    <div>
      <h1>{name}</h1>
      <hr />
      <a href={`/courses/${id}/enrollments`}>Enrollments</a>
      <br />
      <button onClick={() => handleDeleteCourse(course)}>
        <a href="/courses">delete course</a>
      </button>
    </div>
  )
};
