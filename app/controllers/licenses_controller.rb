class LicensesController < ApplicationController
  def index
    @title = "Licenses, Certificates & Authorisation Letters"

    @licenses = Document.licenses
  end
end
