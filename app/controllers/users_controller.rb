class UsersController < ApplicationController
  before_action :set_user, only: [ :show, :destroy ]

  def index
    @users = User.all
    render component: "Users", props: { users: @users }
  end

  def show
    render component: "User", props: { user: @user, courses: @user.courses, full_name: @user.full_name }
  end

  def new
    @user = User.new
    render component: "NewUser", props: { user: @user }
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render component: "NewUser", props: { user: @user }
    end
  end

  def destroy
    @user.destroy
    redirect_to users_path
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
