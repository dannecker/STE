require 'test_helper'

class InquiriesControllerTest < ActionController::TestCase
  test "should get create" do
    get :create
    assert_response :success
  end

end
