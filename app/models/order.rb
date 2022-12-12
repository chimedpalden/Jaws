class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :products, through: :order_items
  has_many :user_notifications, dependent: :destroy, foreign_key: :order_id
end
