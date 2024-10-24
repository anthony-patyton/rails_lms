class EnrollmentsController < ApplicationController
  before_action :set_course

  def index
    @users = @course.users
    @teachers = @course.enrollments.where(role: "teacher")
    @tas = @course.enrollments.where(role: "ta")
    @students = @course.enrollments.where(role: "student")
    render component: "Enrollments", props: { course: @course, teachers: @teachers, tas: @tas, students: @students, users: @users }
  end

  def new
    @users = User.all - @course.users
    @enrollment = @course.enrollments.new
    render component: "NewEnrollment", props: { course: @course, enrollment: @enrollment, users: @users }
  end

  def create
    @enrollment = @course.enrollments.new(enroll_params)

    if @enrollment.save
      redirect_to course_enrollments_path(@course)
    else
      render :new
    end
  end

  def destroy
    @enrollment = @course.enrollments.find(params[:id])
    @enrollment.destroy
    redirect_to course_enrollments_path(@course)
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def enroll_params
    params.require(:enrollment).permit(:role, :user_id)
  end
end
