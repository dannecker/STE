class Document < ActiveRecord::Base
  has_attached_file :attachment, :styles => { thumb: ["220x200#", :jpg] },
                    :default_url => "/images/:style/missing.png"

  has_attached_file :preview, :styles => { thumb: ["220x200#", :jpg] },
                    :default_url => "/images/:style/missing.png"

  validates_attachment_content_type :preview, :content_type => /\Aimage\/.*\Z/
  do_not_validate_attachment_file_type :attachment

  scope :downloads, -> { where(kind: DOWNLOAD_TYPES) }
  scope :licenses, -> { where(kind: LICENSE_TYPES) }

  validates :title, :kind, presence: true

  DOWNLOAD_TYPES = ['Brochure', 'Catalogue']
  LICENSE_TYPES = ['License', 'Authorisation Letter', 'Authorisation Certificate']

  def kind_enum
    DOWNLOAD_TYPES + LICENSE_TYPES
  end

  rails_admin do
    edit do
      include_fields :title, :kind, :attachment, :preview
    end

    list do
      include_fields :title, :kind, :attachment, :preview
    end
  end
end
