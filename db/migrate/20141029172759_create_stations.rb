class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.integer :station_id
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
