
const NewEnrollment = ({ course, enrollment, users }) => {
  const { role, errors, user_id } = enrollment;
  const defaultRole = role ? role : '';
  const defaultUser = user_id ? user_id : '';

  return(
    <div>
      <h1>Add Enrollment</h1>
      { errors && errors }
      <form action={`/courses/${course.id}/enrollments`} method="post">
        <label for="role">Choose a role:</label>
        <select name="enrollment[role]" id="role" defaultValue={defaultRole}>
          <option value="teacher">teacher</option>
          <option value="ta">ta</option>
          <option value="student">student</option>
        </select>
        <label for="user_id">Choose a user:</label>
        <select name="enrollment[user_id]" id="user_id" defaultValue={defaultUser}>
          { users.map((u) => (
            <option value={u.id}>{`${u.first_name} ${u.last_name}`}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
};
