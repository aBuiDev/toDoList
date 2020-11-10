class CreateTestTables < ActiveRecord::Migration[6.0]
  def change
    create_table :test_tables do |t|
      t.string :word
      t.integer :number

      t.timestamps
    end
  end
end
