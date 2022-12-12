class UserNotificationsController < ApplicationController
  def index
    messages = UserNotification.all
    render json: message
  end
  def create
    # binding.break
    order = Order.find(params[:order_id])
    notification = order.user_notifications.create!(user_id: current_user.id, message: params[:message])
    # messages = order.user_notifications.order(:created_at, :desc).first
    ActionCable.server.broadcast 'messages_channel', notification
    head :ok
    # message = UserNotification.new(message_params)
    # if message.save
    #   ActionCable.server.broadcast 'messages_channel', messages
    #   head :ok
    # else
    #   head :ok
    # end
  end
  private
  # def message_params
  #   params.require(:user_notification).permit(:message)
  # end
end
