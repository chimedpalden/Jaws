# frozen_string_literal: true

class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  MAX_EMAIL_LENGTH = 255

  has_secure_password
  has_secure_token :authentication_token
  has_many :user_notifications, dependent: :destroy, foreign_key: :user_id

  validates :username, presence: true, length: { maximum: 35 }
  validates :email, presence: true,
                    uniqueness: { case_sensitive: false },
                    length: { maximum: MAX_EMAIL_LENGTH },
                    format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6 }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create

  has_many :orders

  before_save :to_lowercase

  private

    def to_lowercase
      email.downcase!
    end
end
