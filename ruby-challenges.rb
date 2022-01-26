# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def find_that_word(array_param, string_param)
  array_param.select{|string| string.match(string_param)}
end
p '------------------1-------------------'
p find_that_word(beverages_array, letter_o)
p find_that_word(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_them_up(array_param)
  array_param.inject(0){|sum, num| sum + num}
end
p '------------------2-------------------'
p sum_them_up(nums_array1)
p sum_them_up(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed

  def initialize(model_param, wheels_param = 2, current_speed_param = 0)
    @model = model_param
    @wheels = wheels_param
    @current_speed = current_speed_param
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end
p '------------------3a------------------'
p mybike = Bike.new('Trek Bike').bike_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Super_Bike
  attr_accessor :model, :wheels, :current_speed

  def initialize(model_param, wheels_param = 2, current_speed_param = 0)
    @model = model_param
    @wheels = wheels_param
    @current_speed = current_speed_param
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster(pedal_param)
    @current_speed += pedal_param
  end

  def brake(brake_param)
    @current_speed -= brake_param
    if @current_speed <= 0
      @current_speed = 0
    end
    @current_speed
  end
end
p '------------------3b------------------'
p my_bike = Super_Bike.new("BatMan Bike")
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
# p my_bike.brake(6)
# p my_bike.brake(5)
p my_bike.brake(25)
