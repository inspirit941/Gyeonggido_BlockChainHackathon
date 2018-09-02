class CreatePetitions < ActiveRecord::Migration
  def change
    create_table :petitions do |t|
      t.timestamps :time
      t.string :height
      t.timestamps null: false
    end
  end
end
