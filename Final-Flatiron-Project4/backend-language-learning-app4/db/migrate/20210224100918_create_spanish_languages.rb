class CreateSpanishLanguages < ActiveRecord::Migration[6.1]
  def change
    create_table :spanish_languages do |t|
      t.string :name

      t.timestamps
    end
  end
end
