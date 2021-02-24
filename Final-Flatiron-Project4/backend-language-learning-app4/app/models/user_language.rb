class UserLanguage < ApplicationRecord
    belongs_to :user
    belongs_to :spanish_language
end
