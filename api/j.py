import requests

def get_weather(city):
    # The URL to the API format we want (JSON format)
    url = f"https://wttr.in/{city}?format=j1"
    
    print(f"Fetching weather data for {city}...")
    
    try:
        # Send an HTTP GET request to the internet
        response = requests.get(url)
        
        # Check if the connection was successful (Status Code 200)
        if response.status_code == 200:
            # Parse the raw data into a Python dictionary
            data = response.json()
            
            # Navigate through the JSON layers to grab the data we want
            current_condition = data['current_condition'][0]
            temp_C = current_condition['temp_C']
            weather_desc = current_condition['weatherDesc'][0]['value']
            humidity = current_condition['humidity']
            
            # Print the results cleanly to the user
            print("\n--- Weather Report ---")
            print(f"City: {city.capitalize()}")
            print(f"Temperature: {temp_C}°C")
            print(f"Condition: {weather_desc}")
            print(f"Humidity: {humidity}%")
            print("----------------------")
        else:
            print(f"Error: Unable to fetch data (Status Code: {response.status_code})")
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    user_city = input("Enter a city name: ")
    get_weather(user_city)