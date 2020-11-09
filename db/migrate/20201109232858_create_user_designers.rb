class CreateUserDesigners < ActiveRecord::Migration[6.0]
  def change
    create_table :user_designers do |t|
      t.text :client_feedback

      t.timestamps
    end
  end
end
