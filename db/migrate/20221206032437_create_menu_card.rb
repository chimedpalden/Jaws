class CreateMenuCard < ActiveRecord::Migration[7.0]
  def change
    create_table :menu_card do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.float :tax_rate, null: false
      t.timestamps
    end
  end
end
