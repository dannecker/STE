class Product < ActiveRecord::Base
  belongs_to :category
  has_ancestry

  default_scope { order :position }

  validates :category, :name, :brief, :description, presence: true

  translates :name, :brief, :description
  accepts_nested_attributes_for :translations, allow_destroy: true

  rails_admin do
    nestable_list true
    configure :translations, :globalize_tabs

    edit do
      include_fields :category, :name, :brief

      field :description, :ck_editor
      field :translations
    end

    list do
      include_fields :name, :category, :brief, :updated_at
    end

    show do
      include_fields :name, :category, :brief, :updated_at

      field :image_url do
        formatted_value do
          bindings[:view].tag(:img, { :src => bindings[:object].image_url })
        end
      end

    end
  end
end
