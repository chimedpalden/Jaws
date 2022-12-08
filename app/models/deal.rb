class Deal < ApplicationRecord
  validates :discount_percentage, presence: true
  validates :discounted_menu_item_id, presence: true

  belongs_to :product
end
