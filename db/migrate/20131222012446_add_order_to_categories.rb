class AddOrderToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :order, :integer
    add_index :categories, :order
  end
end
