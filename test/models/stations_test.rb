require 'test_helper'

class StationsTest < ActiveSupport::TestCase

  test "lat_long returns array" do 
    assert_kind_of(Array, Station.lat_long)
  end

  test "lat_long returns latitude first" do
    assert Station.lat_long.first()[0] > 0
  end

  test "lat_long should return all stations in DB" do 
    assert_equal(4, Station.lat_long.length)
  end

  test "return_3_closest_stations returns an array" do 
    assert_kind_of(Array, Station.return_3_closest_stations('1800 South Bell Street
    Arlington, VA 22202'))
  end

  test "return_3_closest_stations returns 3 stations" do
    assert_equal(3, Station.return_3_closest_stations('1800 South Bell Street Arlington, VA 22202').length)
  end

  test "each value in return_3_closest_stations array is an hash" do 
    assert_kind_of(Hash, Station.return_3_closest_stations('1800 South Bell Street Arlington, VA 22202').first())
  end

  test "available_bikes returns a hash" do 
    assert_kind_of(Hash, Station.available_bikes(10, 5))
  end

  test "available_bikes should return a collection containing the proper formating" do
    hash_key_array = [:distance, :location, :bikes, :docks, :address]
    hash_key_array.each{|key| assert_not_nil(Station.available_bikes(0.01, 3)[key])}
  end

  test "available_bikes should not return improper formatting" do
    assert_nil(Station.available_bikes(0.01,3)[:dogs])
  end
  
end
