Rails.application.routes.draw do

  namespace :api do
    get 'messages/random', to: 'messages#random'
  end
  
  root to: 'static_pages#home'

end