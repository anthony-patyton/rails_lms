class EnrollmentsController < ApplicationController
  before_action :set_course

  def index
    @teachers = @coure.enrollments.where(role: "teacher")
    @tas = @coure.enrollments.where(role: "ta")
    @students = @coure.enrollments.where(role: "student")
    render component: "Enrollments", props: { course: @coures, teachers: @teachers, tas: @tas, students: @students }
  end

  def new
    @enrollment = @coure.enrollments.new
    render component: "NewEnrollment", props: { course: @course, enrollment: @enrollment }
  end

  def create
    @enrollment = @coures.enrollment.new(enroll_params)

    if @enrollment.save
      redirect_to [ @coures, @enrollment ]
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
    @course = Course.find(params[:id])
  end

  def enroll_params
    params.require(:enrollment).permit(:role, :user_id)
  end
end
