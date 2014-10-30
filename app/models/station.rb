class Station < ActiveRecord::Base
   geocoded_by :location
   require 'open-uri'

   def self.return_3_closest_stations(location)
      near_station_array = []
      lat_long_location = Geocoder.coordinates(location)
      near = Station.near(location).first(3)
      near.each do |station|
         near_station_array << Station.available_bikes(station.distance, station.station_id)
      end
      near_station_array
   end

   def self.available_bikes(distance, id)
      doc = Nokogiri::XML(open("http://www.capitalbikeshare.com/data/stations/bikeStations.xml"))
      # spits out the number of bikes at a given station
      doc.xpath('//station').each do |node|
         if node.children[0].text == "#{id}"
            return "#{distance.round(2)}mi. #{node.children[1].text} Station #{node.children[12].text}/#{node.children[12].text.to_i + node.children[13].text.to_i} bikes."
         end
      end
   end

   def self.update_station_info
      Station.delete_all
      doc = Nokogiri::XML(open("http://www.capitalbikeshare.com/data/stations/bikeStations.xml"))
      doc.xpath('//station').each do |node|
         Station.create(station_id: node.children[0].text.to_i,
            latitude: node.children[4].text.to_f,
            longitude: node.children[5].text.to_f)
      end
   end
end
