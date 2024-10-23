
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

const handleDeleteEnrollment = ( course, enrollment ) => {
  fetch(`/courses/${course.id}/enrollments/${enrollment.id}`, {
    method: 'DELETE',
  });
}
