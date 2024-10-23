const NewCourse = ({ course }) => {
  const { name, id } = course;
  const defaultName = name ? name : '';
  return(
    <div>
      <h1>Create New Course</h1>
      <form action="/courses" method="post">
        <input
          placeholder="Name of Course"
          type="text"
          defaultValue={defaultName}
          name="course[name]"
        />
        <button type="submit">Create Course</button>
      </form>
    </div>
  )
};
