class InquiriesController < ApplicationController
  respond_to :json
  def create
    @inquiry = Inquiry.new(inquiry_params)

    if @inquiry.save
      respond_with @inquiry
    else
      respond_with @inquiry, status: :unprocessable_entity
    end
  end

  private
  def inquiry_params
    params.require(:inquiry).except(:button).permit(:name, :email, :subject, :message)
  end
end
