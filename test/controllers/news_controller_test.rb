require 'test_helper'

class NewsControllerTest < ActionController::TestCase
  test "should get list" do
    get :list
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get tag" do
    get :tag
    assert_response :success
  end

end
