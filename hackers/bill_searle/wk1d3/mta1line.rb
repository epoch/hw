station = {
  :n => ['TS', '34th', '28th', '23rd', :US, '8th']
}

# get user_start
print "Which station would you like to start at: 'TS', '34th', '28th', '23rd', :US, '8th'? "
user_start = gets.chomp.downcase

# get user_end
print "Which station are you ending at: 'TS', '34th', '28th', '23rd', :US, '8th'? "
user_end = gets.chomp.downcase

#find out the index number of user_start
station_start = station.value[0].index user_start
#find out the index number of user_end
station_end = station.value[0].index user_end

stops = station[:n][user_start .. user_end]
print stops