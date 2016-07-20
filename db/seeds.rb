require 'faker'

tasks = ['eat ice cream', 'feed fish', 'walk to the water', 'eat kimchi', 'get a pedicure', 'go to a concert', 'go fishing', 'run GG Park', 'vacuum - its the worst']

10.times do
  Todo.create(task: tasks.sample, description: Faker::ChuckNorris.fact, completed: false )
end
