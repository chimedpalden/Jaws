class OrdersController < ApplicationController
  include Billing

  def create
    # binding.break

    ActiveRecord::Base.transaction do
      if current_user.current_order.nil? 
        @order = current_user.orders.create!(order_params)
        current_user.update_attribute(:current_order, order.id)
      else
        @order = Order.find(current_user.current_order)
      end
      order_item_params[:order_items].each do |item|
        old_item = @order.order_items.where(product_id: item[:product_id], order_id: current_user.current_order)
        if old_item.present?
          old_item[0].update_attribute(:quantity, item[:quantity])
        else
          @order.order_items.build(item)
        end
      end
      @order.save!
    end
  end

  def show
    order = Order.find(params[:id])
    @cart_items = calculate_total_bill(params[:id])
    # binding.break
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
#   }
# }
