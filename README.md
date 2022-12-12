# README

Servers to run
`./bin/webpack-dev-server`
`rails s`
`bundle exec sidekiq`

Postman endpoint


Login endpoint
```
curl --location --request POST 'http://localhost:3000/session' \
--header 'Cookie: _session_id=Y1NEcVdaM1VWUVI0R1grNjNqYlVxZmNJb3VzbmtzbzJDdU5NcnJQS3BXYTRCSHdkK1cxUEVZZEJnbFhoT2lpb2ZMSGVQbXl2MnJaL05MM0dPU1g0ZXhLckFOOC9jRmdyUE9TcG9DUDJUSVVqd0haTFpFOHhUZThiRGFKcGZmK2otLXdML29qUllsUGlER3ZuM0J1aTlUcXc9PQ%3D%3D--054b38448554b136b543e169bcac238bed4ccc8e; metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3; metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "login": {
        "email": "mike@example.com",
        "password": "welcome"
    }
}'
```


Create Product

```
curl --location --request POST 'http://localhost:3000/products' \
--header 'X-Auth-Token: L8y28T35jCMwZdCphp4QhW9h' \
--header 'X-Auth-Email: mike@example.com' \
--header 'Content-Type: application/json' \
--header 'Cookie: metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--data-raw '{
    "product": {
        "name": "Burger101", 
        "price": 20,
        "tax_rate": 12 ,
        "deals_attributes": {
            "discounted_menu_item_id": ,
            "discount_percentage": 
        }
    }
}'
```


Create Product with deals

```
curl --location --request POST 'http://localhost:3000/products' \
--header 'X-Auth-Token: L8y28T35jCMwZdCphp4QhW9h' \
--header 'X-Auth-Email: mike@example.com' \
--header 'Content-Type: application/json' \
--header 'Cookie: metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--data-raw '{
    "product": {
        "name": "Burger101", 
        "price": 20,
        "tax_rate": 12 ,
        "deals_attributes": [{
            "discounted_menu_item_id": 2,
            "discount_percentage": 20
        }]
    }
}'
```


Order Create

```
curl --location --request POST 'http://localhost:3000/orders' \
--header 'X-Auth-Token: L8y28T35jCMwZdCphp4QhW9h' \
--header 'X-Auth-Email: mike@example.com' \
--header 'Content-Type: application/json' \
--header 'Cookie: metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--data-raw '{
    "order":{
        "order_items": [{
            "product_id": 1,
            "quantity": 2
        }]
    }
}'
```

Order Update

```
curl --location --request PUT 'http://localhost:3000/orders/1' \
--header 'X-Auth-Token: L8y28T35jCMwZdCphp4QhW9h' \
--header 'X-Auth-Email: mike@example.com' \
--header 'Cookie: metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--data-raw ''
```


Send Notification

```
curl --location --request POST 'http://localhost:3000/user_notifications' \
--header 'X-Auth-Token: L8y28T35jCMwZdCphp4QhW9h' \
--header 'X-Auth-Email: mike@example.com' \
--header 'Content-Type: application/json' \
--header 'Cookie: metabase.DEVICE=ebe2924d-99bf-4982-ba16-fb3218d1edc3' \
--data-raw '{
  "order_id": 1,
  "message": "last stage 1"
}'
```