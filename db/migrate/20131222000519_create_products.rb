class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :category, index: true
      t.string :name
      t.text :brief
      t.text :description
      t.string :ancestry
      t.integer :position

      t.timestamps
    end
    add_index :products, :ancestry
  end
end
