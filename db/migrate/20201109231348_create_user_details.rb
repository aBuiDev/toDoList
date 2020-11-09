class CreateUserDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :user_details do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :mobile
      t.integer :age
      t.date :birth_date

      t.timestamps
    end
  end
end
