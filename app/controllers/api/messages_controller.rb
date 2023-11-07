class Api::MessagesController < ApplicationController
    def random
      greetings = Message.order('RANDOM()').limit(1).first
      render json: greetings
    end
end