Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root to: "home#index"
  get '/restricted', to: "home#restricted", as: "restricted"
  get '/projects/new', to: "projects#new"
  post '/projects/new', to: "projects#new"
  resources :test_tables, controller: "projects"
end
