class Category < ActiveRecord::Base
  has_many :products
  has_ancestry

  default_scope { where(active: true).order(:position) }

  validates :name, presence: true

  rails_admin do
    nestable_tree true

    edit do
      field :name
      field :brief
    end
  end
end
