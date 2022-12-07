class MenuCard < ApplicationRecord
  self.table_name = "menu_card"
  validates :name, presence: true, uniqueness: true, length: { maximum: 125 }

  has_many :deals
  accepts_nested_attributes_for :deals
end
