class ProductsController < ApplicationController
  # respond_to :html, :xml, :json

  def index
    products = Product.all
    # respond_with(@menu)
    render status: :ok, json: { products: products }
  end

  def create
    product = Product.new(product_params)
    # binding.break
    product.save!
    render status: :ok, json: {notice: 'Product was successfully created'}
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :tax_rate, deals_attributes: [:discounted_menu_item_id, :discount_percentage])
  end
end
