require 'test_helper'

class CataloguesControllerTest < ActionController::TestCase
  test "should get defence" do
    get :defence
    assert_response :success
  end

  test "should get research" do
    get :research
    assert_response :success
  end

  test "should get downloads" do
    get :downloads
    assert_response :success
  end

end
