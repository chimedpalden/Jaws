# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(email: 'admin@example.com', username: 'Admin',password: 'welcome', password_confirmation: 'welcome
')

Product.create!(
  [{
    name: 'Omlette', tax_rate: 5, price: 50
  },{
    name: 'Pancake', tax_rate: 10, price: 90
  },{
    name: 'Sandwitch', tax_rate: 15, price: 120
  },{
    name: 'burger', tax_rate: 12, price: 40
  },{
    name: 'Juice', tax_rate: 25, price: 80
  },{
    name: 'Tea', tax_rate: 8, price: 20
  },{
    name: 'Coffee', tax_rate: 10, price: 25
  },{
    name: 'Soup', tax_rate: 10, price: 150
  }]
)


