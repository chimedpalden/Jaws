# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_06_185230) do
  create_table "deals", force: :cascade do |t|
    t.integer "discounted_menu_item_id", null: false
    t.integer "discount_percentage", null: false
    t.integer "menu_card_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_card_id"], name: "index_deals_on_menu_card_id"
  end

  create_table "menu_card", force: :cascade do |t|
    t.string "name", null: false
    t.integer "price", null: false
    t.float "tax_rate", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
