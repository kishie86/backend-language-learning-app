class CreateUserLanguages < ActiveRecord::Migration[6.1]
  def change
    create_table :user_languages do |t|
      t.integer :user_id
      t.integer :spanish_language_id

      t.timestamps
    end
  end
end
