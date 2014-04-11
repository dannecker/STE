require 'test_helper'

class MediaControllerTest < ActionController::TestCase
  test "should get uav" do
    get :uav
    assert_response :success
  end

  test "should get tank" do
    get :tank
    assert_response :success
  end

  test "should get gun" do
    get :gun
    assert_response :success
  end

  test "should get ship" do
    get :ship
    assert_response :success
  end

end
