class MenuCardController < ApplicationController
  # respond_to :html, :xml, :json

  def index
    menu = MenuCard.all
    # respond_with(@menu)
    render status: :ok, json: { menu: menu }
  end

  def create
    menu_item = MenuCard.new(item_params)
    # binding.break
    menu_item.save!
    render status: :ok, json: {notice: 'Menu item was successfully created'}
  end

  private

  def item_params
    params.require(:menu_card).permit(:name, :price, :tax_rate, deals_attributes: [:discounted_menu_item_id, :discount_percentage])
  end
end
