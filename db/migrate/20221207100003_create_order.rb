class CreateOrder < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :status, default: 0, null: false
      t.belongs_to :user, null: false
      t.timestamps
    end

    create_table :products do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.float :tax_rate, null: false
      t.timestamps
    end

    create_table :order_items do |t|
      t.belongs_to :order, null: false
      t.belongs_to :product, null: false
      t.timestamps
    end
  end
end
