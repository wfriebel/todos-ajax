class Todo < ActiveRecord::Base
  # Remember to create a migration!
  validates :task, :description, presence: true
end
