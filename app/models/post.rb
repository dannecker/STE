class Post < ActiveRecord::Base
  #acts_as_taggable
  has_and_belongs_to_many :tags

  has_attached_file :picture,
                    :styles => {wide: "750x750>",
                                medium: "500x375#",
                                thumb: "150x150#" },
                    :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  validates :title, :description, :content, presence: true

  default_scope {
    order created_at: :desc
  }

  rails_admin do
    edit do
      include_fields :title, :description, :picture, :tags

      field :content, :ck_editor
    end

    list do
      include_fields :title, :description, :tags, :updated_at
    end
  end
end
