class AddAttachmentPreviewToDocuments < ActiveRecord::Migration
  def self.up
    change_table :documents do |t|
      t.attachment :preview
    end
  end

  def self.down
    drop_attached_file :documents, :preview
  end
end
