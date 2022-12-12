Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "menu_card#index"
  root "home#index"

  resources :menu_card, only: %i[index create]
  resources :products, only: %i[index create]
  resources :orders, only: %i[create update show]
  resources :order_items, only: :show
  resources :users, only: %i[index create]
  resource :session, only: [:create, :destroy]
  
  resources :messages, only: [:index, :create]
  resources :user_notifications, only: [:index, :create]
  mount ActionCable.server => '/cable'

  get '*path', to: 'home#index'
end
