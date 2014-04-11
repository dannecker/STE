class ChangeTypeInDocumentToKind < ActiveRecord::Migration
  def change
    rename_column :documents, :type, :kind
  end
end
