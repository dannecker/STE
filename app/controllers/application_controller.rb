class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  layout :layout_by_resource

  before_action :set_locale

  def default_url_options(options = {})
    { locale: I18n.locale }.merge options
  end

  protected
  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end

  private
  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
  end


  def set_locale
    logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"

    I18n.locale = params[:locale] || extract_locale_from_accept_language_header || I18n.default_locale
    # Rails.application.routes.default_url_options[:locale]= I18n.locale

    logger.debug "* Locale set to '#{I18n.locale}'"
  end
end
