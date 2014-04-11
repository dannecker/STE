class Product < ActiveRecord::Base
  belongs_to :category
  has_ancestry

  default_scope { order :position }

  validates :category, :name, :brief, :description, presence: true

  rails_admin do
    nestable_list true

    edit do
      include_fields :category, :name, :brief

      field :description, :ck_editor
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
