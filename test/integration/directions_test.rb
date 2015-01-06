require 'test_helper'

class DirectionsTest < ActionDispatch::IntegrationTest

  def setup
    @address = '1800 South Bell Street
    Arlington, VA 22202'
    @address2 = '1155 15th st NW, Washington DC'
  end

  test "anyone can visit main page" do 
    get root_url
    assert_response :success
  end

  test "direction submit redirects to trip page" do
    visit root_url
    fill_in 'start', with: @address
    fill_in 'end', with: @address2
    click_button 'Go!'
    save_and_open_page
    assert_equal trip_path, current_path
  end

  test "make sure CaBi button is checked by default" do
    visit root_url
    assert has_checked_field?('cbs')
  end

  test "when directions are submitted it populates model with 6 options" do
    visit root_url
    click_button 'Go!'
    assert_equal trip_path, current_path
  end

end
