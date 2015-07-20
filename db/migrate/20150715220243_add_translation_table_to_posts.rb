class AddTranslationTableToPosts < ActiveRecord::Migration
  def self.up
    Post.create_translation_table!({
                                       title: :string,
                                       description: :string,
                                       content: :text
                                   }, {
                                       :migrate_data => true
                                   })
  end

  def self.down
    Post.drop_translation_table! :migrate_data => true
  end
end
