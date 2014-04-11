class Inquiry < ActiveRecord::Base
  validates :email, uniqueness: true,
                    format: { with: /\A[^@]+@[^@]+\z/ }

  validates :name, :email, :subject, :message,
                   presence: true

end
