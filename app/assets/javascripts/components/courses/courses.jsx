const Courses = ({ courses }) => {
  return(
    <div>
      <h1>Courses</h1>
      { courses.map((course) => (
        <div key={course.id}>
          <a href={`/courses/${course.id}`}>{course.name}</a>
        </div>
      ))}
    </div>
  )
};
