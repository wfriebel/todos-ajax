get '/' do
  redirect '/todos'
end

get '/todos' do
  @todos = Todo.order(:created_at)
  erb :index
end

get '/todos/new' do
  @todo = Todo.new
  if request.xhr?
    erb :new, layout: false
  else
    erb :new
  end
end

get '/todos/:id' do
  @todo = Todo.find(params[:id])
  erb :show
end
