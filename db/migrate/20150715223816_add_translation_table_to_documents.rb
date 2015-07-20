class AddTranslationTableToDocuments < ActiveRecord::Migration
  def self.up
    Document.create_translation_table!({
                                       title: :string,
                                       kind: :string,
                                   }, {
                                       :migrate_data => true
                                   })
  end

  def self.down
    Document.drop_translation_table! :migrate_data => true
  end
end
