Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root to: "home#index"
  get '/restricted', to: "home#restricted", as: "restricted"
end
