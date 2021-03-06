json.array!(@movies) do |movie|
  json.extract! movie, :id, :title, :in_theaters, :release, :rating, :description
  json.url movie_url(movie, format: :json)
end
