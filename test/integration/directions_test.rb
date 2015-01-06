require 'test_helper'

class DirectionsTest < ActionDispatch::IntegrationTest
  test "anyone can visit main page" do 
    get root_url
    assert_response :success
  end
end
