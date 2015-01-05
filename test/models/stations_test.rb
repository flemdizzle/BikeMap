require 'test_helper'

class StationsTest < ActiveSupport::TestCase

  test "lat_long returns array of station lat longs" do 
    assert_equal(Array, Station.lat_long.class)
  end

end
