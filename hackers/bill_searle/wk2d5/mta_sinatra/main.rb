require 'pry'
# require 'pry-debugger'
require 'sinatra'
require 'sinatra/reloader'

$lines = {
  'n' => ['ts', '34th', '28th', '23rd', 'us', '8th'],
  'l' => ['8th', '6th', 'us', '3rd','1st'],
  '6' => ['gc', '33rd', '28th', '23rd', 'us','ap']
}

get '/' do
  erb :input
end

get '/results' do
params.inspect
  @start_line, @start_station = params["start_option"].split(',')
  @end_line, @end_station = params["end_option"].split(',')

  @start_station = $lines[@start_line].index @start_station # get the index number of the start stop
  @end_station = $lines[@end_line].index @end_station # get the index number of the last stop

  @intersect1 = $lines[@start_line].index 'us'
  @intersect2 = $lines[@end_line].index 'us'

     # You are on a single line going from lower index to higher index
  if @start_line == @end_line
    if @start_station < @end_station
       @trip1 = $lines[@start_line][@start_station..@end_station] # find the range between the index's on the specified line
    else
       @trip1 = $lines[@start_line][@end_station..@start_station] # find the range between the index's on the specified line
    end
       @trip_length = @trip1.length
       @trip_stations = @trip1.reverse.join(', ')
  else
    if @start_station <= @intersect1
       @trip1 = $lines[@start_line][@start_station..@intersect1]
    end
    if @end_station <= @intersect2
       @trip2 = $lines[@end_line][@end_station..@intersect2]
       @trip2.reverse!
       @trip2.shift
    end
    if @start_station >= @intersect1
       @trip1 = $lines[@start_line][@intersect1..@start_station]
       @trip1.reverse!
    end
    if @end_station >= @intersect2
       @trip2 = $lines[@end_line][@intersect2..@end_station]
       @trip2.shift
    end
  end
  # binding.pry

  # if @start_station == 'us' && @end_station == 'us'
  #    @trip_length = nil
  #    @trip_stations = "You are already there"
  # elsif
  if
      (@start_station == @end_station && @start_line == @end_line) || 
      (@trip1 == "us" && @trip2 == [])
      @trip_length = nil
      @trip_stations = "You are already there"
  elsif
      @trip2 == nil
      @trip_stations = "You will pass though, #{@trip1.join(', ')}"
      @trip_length = "The total number of stops is: #{@trip1.length}"
    else
      @trip_stations = "You will pass through, #{@trip1.join(', ') + ', ' + @trip2.join(', ')} "
      @trip_length = "The total number of stops is: #{@trip1.length + @trip2.length}"
    end
# binding.pry
  erb :results
end
