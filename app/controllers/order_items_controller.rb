class OrderItemsController < ApplicationController
  def show
    # @order_items = OrderItem.find(params[:id])
    @order_items = OrderItem.find_by(product_id: params[:id], order_id: current_user.current_order)
    unless @order_items
      @order_items = { quantity: 1, product_id: params[:id] }
    end
  end
end
