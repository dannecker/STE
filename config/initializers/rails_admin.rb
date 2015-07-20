# RailsAdmin config file. Generated on December 21, 2013 23:37
# See github.com/sferik/rails_admin for more informations

RailsAdmin.config do |config|


  ################  Global configuration  ################

  # Set the admin name here (optional second array element will appear in red). For example:
  config.main_app_name = ['STE', 'Backoffice']
  # or for a more dynamic name:
  # config.main_app_name = Proc.new { |controller| [Rails.application.engine_name.titleize, controller.params['action'].titleize] }

  # RailsAdmin may need a way to know who the current user is]
  config.current_user_method { current_user } # auto-generated

  # If you want to track changes on your models:
  config.audit_with :history, 'User'

  # Or with a PaperTrail: (you need to install it first)
  #config.audit_with :paper_trail, 'User', 'PaperTrail::Version'

  # Display empty fields in show views:
  # config.compact_show_view = false

  # Number of default rows per-page:
  # config.default_items_per_page = 20

  # Exclude specific models (keep the others):
  config.excluded_models = [ Ckeditor::Asset, Ckeditor::AttachmentFile, Ckeditor::Picture ]

  config.model 'Post::Translation' do
    visible false
    configure :locale, :hidden do
      help ''
    end
    include_fields :locale, :title, :description, :content
  end

  config.model 'Document::Translation' do
    visible false
    configure :locale, :hidden do
      help ''
    end
    include_fields :locale, :title, :kind
  end

  config.model 'Category::Translation' do
    visible false
    configure :locale, :hidden do
      help ''
    end
    include_fields :locale, :name, :brief
  end

  config.model 'Product::Translation' do
    visible false
    configure :locale, :hidden do
      help ''
    end
    include_fields :locale, :name, :brief, :description
  end

  # Include specific models (exclude the others):
  config.included_models = [Category, Category::Translation,
                            Document, Document::Translation,
                            Inquiry,
                            Post, Post::Translation,
                            Product, Product::Translation,
                            Subscriber,
                            Tag,
                            User]

  # Label methods for model instances:
  # config.label_methods << :description # Default is [:name, :title]

  config.actions do
    dashboard
    index
    new
    export
    history_index
    bulk_delete

    show
    edit
    delete
    history_show
    show_in_app

    nestable
  end

  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method &:current_user

  ################  Model configuration  ################

  # Each model configuration can alternatively:
  #   - stay here in a `config.model 'ModelName' do ... end` block
  #   - go in the model definition file in a `rails_admin do ... end` block

  # This is your choice to make:
  #   - This initializer is loaded once at startup (modifications will show up when restarting the application) but all RailsAdmin configuration would stay in one place.
  #   - Models are reloaded at each request in development mode (when modified), which may smooth your RailsAdmin development workflow.


  # Now you probably need to tour the wiki a bit: https://github.com/sferik/rails_admin/wiki
  # Anyway, here is how RailsAdmin saw your application's models when you ran the initializer:
end
