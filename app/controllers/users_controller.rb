class UsersController < ApplicationController
  skip_before_action :authenticate_user_using_x_auth_token

  def index
    users = User.select(:id, :username)
    render status: :ok, json: { users: users }
  end

  def create
    user = User.new(user_params)
    user.save!
    render status: :ok, json: {notice: 'User was successfully created!'}
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
