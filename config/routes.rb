STE::Application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/backoffice', :as => 'rails_admin'
  mount Ckeditor::Engine => '/backoffice/editor'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  get "newsroom", to: "news#list"
  get "news/:id", to: "news#show", as: 'news', id: /\d+/
  get "news/tagged/:tag_id", to: "news#tag", as: 'tag', tag_id: /\d+/

  get "media/uav"
  get "media/tank"
  get "media/gun"
  get "media/ship"

  get "contact" => "contact#index"
  get "licenses" => "licenses#index"
  get "defence" => "catalogues#defence"
  get "research" => "catalogues#research"
  get "downloads" => "catalogues#downloads"
  get "services" => "services#index"
  get "about" => "about#index"
  get "index" => "home#index"

  get "3d-views" => "media#uav"
  get "uav-r100-3d-view" => "media#uav"

  get "catalogues" => "catalogues#defence"
  get "research-:id", to: "catalogues#research", as: :research_category, id: /\d+/
  get "defence-:id", to: "catalogues#defence", as: :defence_category, id: /\d+/
  get "catalogues/:id", to: "catalogues#item", as: :product, id: /\d+/

  resources :subscribers
  resources :inquiries

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
