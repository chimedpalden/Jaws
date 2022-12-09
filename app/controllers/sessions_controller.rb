class SessionsController < ApplicationController
  skip_before_action :authenticate_user_using_x_auth_token, only: :create

  def create
    # binding.break
    @user = User.find_by!(email: login_params[:email].downcase)
    unless @user.authenticate(login_params[:password])
      # render status: :ok, json: { users: users }
      respond_with_error("Incorrect credentials, try again.", :unauthorized)
    end
  end

  def destroy
    @current_user = nil
  end

  private

    def login_params
      params.require(:login).permit(:email, :password)
    end
end
