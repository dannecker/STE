class Subscriber < ActiveRecord::Base
  validates :email, presence: true,
                    uniqueness: true,
                    format: { with: /\A[^@]+@[^@]+\z/ }
end
