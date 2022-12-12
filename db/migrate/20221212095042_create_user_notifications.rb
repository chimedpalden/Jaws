class CreateUserNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :user_notifications do |t|
      t.references :user, foreign_key: true
      t.references :order, foreign_key: true
      t.text :message
      t.timestamps
    end
  end
end
