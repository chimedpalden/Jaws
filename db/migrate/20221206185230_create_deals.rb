class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.integer :discounted_menu_item_id, null: false
      t.integer :discount_percentage, null: false
      t.belongs_to :menu_card

      t.timestamps
    end
  end
end
