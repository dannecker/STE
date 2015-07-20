class Category < ActiveRecord::Base
  has_many :products
  has_ancestry

  default_scope { where(active: true).order(:position) }

  validates :name, presence: true

  translates :name, :brief
  accepts_nested_attributes_for :translations, allow_destroy: true

  rails_admin do
    nestable_tree true
    configure :translations, :globalize_tabs

    edit do
      field :name
      field :brief
      field :translations
    end
  end
end
