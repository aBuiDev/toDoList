class CreateUserClients < ActiveRecord::Migration[6.0]
  def change
    create_table :user_clients do |t|
      t.text :designer_feedback

      t.timestamps
    end
  end
end
