Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "menu_card#index"
  root "home#index"

  constraints(lambda { |req| req.format == :json }) do
    resources :menu_card, only: %i[index create]
    resources :products, only: %i[index create]
    resources :orders, only: :create
    resources :users, only: %i[index create]
    resource :session, only: [:create, :destroy]
  end

  get '*path', to: 'home#index'
end
