class OrdersController < ApplicationController

  # def index
  #  orders = Order.all
  #  render status: :ok, json: { orders: orders }
  # end

  def new
    product = Product.find(order_params[:product_id])

    order = Order.create(user_id: order_params[:user_id] )
    order_items = OrderItem.create(order_id: order.id, product_id: order_params[:product_id])
    user = User.find(order_params[:user_id])
    user.update(current_order: order.id )
    order_items = order.order_items
  end

  def create
    order = Order.new(order_params)
    order.save!
    render status: :ok, json: { notice: 'Order was successfully created' }
  end

  private

    def order_params
      params.require(:order, :product_id, :user_id)
    end
end
