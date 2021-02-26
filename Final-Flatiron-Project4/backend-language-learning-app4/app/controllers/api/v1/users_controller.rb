class Api::V1::UsersController < ApplicationController
    def index

        render json: User.all.to_json(user_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def user_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end
end
