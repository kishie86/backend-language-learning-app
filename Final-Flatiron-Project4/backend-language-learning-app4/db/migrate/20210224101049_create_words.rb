class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :image
      t.string :english_word
      t.string :non_english_word
      t.integer :spanish_language_id

      t.timestamps
    end
  end
end
