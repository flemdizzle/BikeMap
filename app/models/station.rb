class Station < ActiveRecord::Base

   def self.return_3_closest_stations(location)
      geocoded_location = Geocoder.coordinates(location)
      array = []
      Station.all.each do |x|
         binding.pry
         array << distance_between(geocoded_location, [x.latitude, x.longitude])
      end
      array
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
