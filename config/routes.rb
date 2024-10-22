Rails.application.routes.draw do
  root "course#index"

  resources :users
  resources :courses
end
