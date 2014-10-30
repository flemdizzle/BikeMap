class TripsController < ApplicationController
    def new
    end
    def show
      @start = params[:start]
      @end = params[:end]
      @cbs = params[:cbs]
      @start_stations = Station.return_3_closest_stations(@start)
      @end_stations = Station.return_3_closest_stations(@end)
    end
end
