require 'test_helper'

class StationsTest < ActiveSupport::TestCase

  test "lat_long returns array of station lat longs" do 
    assert_kind_of(Array, Station.lat_long)
  end

  test "return_3_closest_stations returns an array" do 
    assert_kind_of(Array, Station.return_3_closest_stations(-77.0512))
  end

  test "available_bikes returns a hash" do 
    assert_kind_of(Hash, Station.available_bikes(10, 5))
  end
end
