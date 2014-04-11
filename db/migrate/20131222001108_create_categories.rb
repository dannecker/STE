class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name
      t.text :brief
      t.string :ancestry
      t.integer :position

      t.timestamps
    end
    add_index :categories, :ancestry
  end
end
