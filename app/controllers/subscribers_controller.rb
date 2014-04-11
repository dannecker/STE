class SubscribersController < ApplicationController
  respond_to :json
  def create
    @subscriber = Subscriber.new(subscriber_params)

    if @subscriber.save
      respond_with @subscriber
    else
      respond_with @subscriber, status: :unprocessable_entity
    end
  end

  private
  def subscriber_params
    params.require(:subscriber).permit(:email)
  end
end
