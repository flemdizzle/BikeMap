class TripsController < ApplicationController
    def new
      @trip = Trip.new
    end
    def show
      @start = params[:start]
      @end = params[:end]
      @cbs = params[:cbs]
    end
end
