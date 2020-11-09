class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.string :rating
      t.integer :reviewer

      t.timestamps
    end
  end
end
