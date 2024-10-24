
const handleDeleteUser = ( user ) => {
  fetch(`/users/${user.id}`, {
    method: 'DELETE',
  });
};

const handleDeleteCourse = ( course ) => {
  fetch(`/courses/${course.id}`, {
    method: 'DELETE',
  });
}

const handleDeleteEnrollment = ( course, id ) => {
  fetch(`/courses/${course.id}/enrollments/${id}`, {
    method: 'DELETE',
  });
}
