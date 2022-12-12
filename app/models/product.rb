class Product < ApplicationRecord
  validates :name, presence: true, uniqueness: true, length: { maximum: 125 }
  validates_presence_of :price, :tax_rate

  has_many :deals
  has_many :order_items
  has_many :orders, through: :order_items
  accepts_nested_attributes_for :deals, allow_destroy: true, reject_if: :all_blank
end
