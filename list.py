def celsius_to_kelvin(value_celsius):
    value_kelvin = 0.0
    value_kelvin = value_celsius + 273.15
    return value_kelvin


value_c = 10.0
print(value_c, 'C is', celsius_to_kelvin(value_c), 'K')



value_k = 283.15

# print(value_k, 'K is', kelvin_to_celsius(value_k), 'C')