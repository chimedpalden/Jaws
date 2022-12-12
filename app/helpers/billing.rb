module Billing

  def list_order_items(order)
    order.order_items.sort { |x, y| y.product.price - x.product.price }
  end

  def fetch_applicable_deals(order_item, order)
    order_item.product.deals
      .where(discounted_menu_item_id: list_order_items(order).map(&:product_id))
      .sort { |x,y| y.discounted_product.price - x.discounted_product.price }
  end

  def calculate_total_bill(order_id)
    order = Order.find(order_id)

    post_discount_total(list_order_items(order), order)
  end

  def pre_discount_total(order)
    order.order_items.inject(0) do |sum, item|
      sum + item.product.price
    end
  end

  def post_discount_total(order_items, order)
    deals_map = product_deals_map(order_items, order)
    # binding.break
    # binding.break
    # {34=>
    #   [{:order_item_id=>34, :quantity=>2, :name=>"item2", :price=>345, :tax_rate=>54.0, :discount_percentage=>50},
    #    {:order_item_id=>35, :quantity=>2, :name=>"sandwitch", :price=>30, :tax_rate=>10.0, :discount_percentage=>34}],
    #  33=>[{:order_item_id=>35, :quantity=>2, :name=>"sandwitch", :price=>30, :tax_rate=>10.0, :discount_percentage=>50}],
    #  35=>[]}
    flag = Hash.new
    order_items.map(&:id).each { |x| flag[x] = 0 }

    # {order_items_id: 37, total_price: 343, tax_rate}
    price_map_per_item = []
    deals_map.each do |key, value|
      next if flag[key] == 1

      # calculate for key product
      order_item = order_items.select { |item| item.id == key }[0]
      price_map_per_item.push(price_per_item(order_item))
      flag[key] = 1
      # binding.break

      #calculate values items
      value.each do |x|
        # binding.break
        next if flag[x[:order_item_id]] == 1
        discounted_quantity = (x[:quantity] > order_item.quantity) ? order_item.quantity : x[:quantity]
        non_discounted_quantity = (x[:quantity] > order_item.quantity) ? (x[:quantity] - order_item.quantity) : 0

        discount_price = (discounted_quantity * x[:price]) * (100 - x[:discount_percentage])/100
        non_discount_price = (non_discounted_quantity * x[:price])
        total_price = discount_price + non_discount_price

        data = { order_item_id: x[:order_item_id], total_price_after_discount_before_tax: total_price, total_actual_price_before_tax: (x[:quantity] * x[:price]), tax_rate: x[:tax_rate], name: x[:name], quantity: x[:quantity] }
        price_map_per_item.push(data)
        flag[x[:order_item_id]] = 1
      end

    end
    # binding.break
    price_map_per_item
    # [{:order_item_id=>34, :total_price_before_tax=>345, :total_actual_price_before_tax=>345, :tax_rate=>54.0, :name=>"item2", :quantity=>1},
    # {:order_item_id=>34, :total_price_before_tax=>172, :total_actual_price_before_tax=>345, :tax_rate=>54.0, :name=>"item2", :quantity=>1},
    # {:order_item_id=>35, :total_price_before_tax=>39, :total_actual_price_before_tax=>60, :tax_rate=>10.0, :name=>"sandwitch", :quantity=>2},
    # {:order_item_id=>33, :total_price_before_tax=>30, :total_actual_price_before_tax=>30, :tax_rate=>10.0, :name=>"sandwitch101", :quantity=>1}]
  end

  def price_per_item(item)
    quantity = item.quantity
    price = item.product.price
    tax = item.product.tax_rate

    { order_item_id: item.id, total_price_after_discount_before_tax: price * quantity, total_actual_price_before_tax: price * quantity, tax_rate: tax, name: item.product.name, quantity: quantity }
  end

  def product_deals_map(order_items, order)
    h = {}  # {product: [discounted products..]} all in order_item_ids

    order_items.each_with_index do |order_item, index|
      deals = fetch_applicable_deals(order_item, order)

      disount_ids = order_items.map do |item|
        deal_match = deals.select { |deal| deal.discounted_menu_item_id == item.product_id }
        if deal_match.present?
          if order_item.id == item.id  # if the discount is on the same product
            { order_item_id: item.id, quantity: (item.quantity - 1), name: item.product.name, price: item.product.price, tax_rate: item.product.tax_rate, discount_percentage: deal_match[0].discount_percentage } 
          else
            { order_item_id: item.id, quantity: item.quantity, name: item.product.name, price: item.product.price, tax_rate: item.product.tax_rate, discount_percentage: deal_match[0].discount_percentage } 
          end
        end
      end.compact

      h[order_item.id] = disount_ids
    end
    h
  end
end
