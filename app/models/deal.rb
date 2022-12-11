class Deal < ApplicationRecord
  validates :discount_percentage, presence: true
  validates :discounted_menu_item_id, presence: true

  belongs_to :product
  belongs_to :discounted_product, class_name: 'Product', foreign_key: 'discounted_menu_item_id'
end
