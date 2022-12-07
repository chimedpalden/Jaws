Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "menu_card#index"
  root "home#index"
  
  resources :menu_card, only: %i[index create]
  get '*path', to: 'home#index'
end
