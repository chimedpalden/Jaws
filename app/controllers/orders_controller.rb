class OrdersController < ApplicationController

  # def index
  #  orders = Order.all
  #  render status: :ok, json: { orders: orders }
  # end

  def create
    ActiveRecord::Base.transaction do
      order = current_user.orders.new(order_params)
      order_item_params[:order_items].each do |item|
        order.order_items.build(item)
      end
      order.save!
    end
    render status: :ok, json: { notice: 'Order was successfully created' }
  end

  private

    def order_params
      params.require(:order).permit(:status)
    end

    def order_item_params
      params.require(:order).permit(:status, order_items: [:product_id, :quantity])
    end
end

# {
#   order: {
#     order_item: [{
#       product_id: 1,
#       quantity: 3
#     }, {
#       product_id: 3,
#       quantity: 2
#     }]
#   },
#   user_id: 1
# }
