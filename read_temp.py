from sense_hat import SenseHat
import os
import json
import uuid


file_name = 'uid.json'

if not os.path.exists(file_name):
    # Generate a new UUID
    new_uuid = str(uuid.uuid4())

    # Create a dictionary with the UUID
    data = {
        'uuid': new_uuid
    }

    # Write the dictionary to the file in JSON format
    with open(file_name, 'w') as file:
        json.dump(data, file, indent=4)

    print(f"File '{file_name}' created with UUID: {new_uuid}")
else:
    print(f"File '{file_name}' already exists.")
    
sense = SenseHat()
temperature = sense.get_temperature()
print(temperature)