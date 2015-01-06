class Station < ActiveRecord::Base
   geocoded_by :location
   require 'open-uri'

   def self.lat_long
      array = []
      Station.all.each do |station|
         array << [station[:latitude], station[:longitude]]
      end
      return array
   end

   def self.return_3_closest_stations(location)
      near_station_array = []
      # lat_long_location = Geocoder.coordinates(location)
      near = Station.near(location).first(3)
      near.each do |station|
         near_station_array << Station.available_bikes(station.distance, station.station_id)
         # near_station_array << station.available_bikes
      end
      near_station_array
   end

   def self.available_bikes(distance, id)
      doc = Nokogiri::XML(open("http://www.capitalbikeshare.com/data/stations/bikeStations.xml"))
      # spits out the number of bikes at a given station
      doc.xpath('//station').each do |node|
         if node.children[0].text == "#{id}"
            latitude = node.children[4].text
            distance = distance.round(2)
            longitude = node.children[5].text
            bikes = node.children[12].text
            docks = node.children[13].text
            address = node.children[1].text
            return Hash[distance: "#{distance}mi.", location: "#{latitude}, #{longitude}", bikes: "#{bikes}", docks: "#{docks}", address: "#{address}"]
         end
      end
   end

   # def self.update_station_info
   #    Station.delete_all
   #    doc = Nokogiri::XML(open("http://www.capitalbikeshare.com/data/stations/bikeStations.xml"))
   #    doc.xpath('//station').each do |node|
   #       Station.create(station_id: node.children[0].text.to_i,
   #          latitude: node.children[4].text.to_f,
   #          longitude: node.children[5].text.to_f)
   #    end
   # end
end
