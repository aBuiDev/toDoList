class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :brief
      t.text :description
      t.string :type
      t.date :start_date
      t.date :deadline
      t.integer :time_frame
      t.date :date_complete
      t.boolean :designer_approval
      t.boolean :client_approval
      t.integer :payment_status

      t.timestamps
    end
  end
end
