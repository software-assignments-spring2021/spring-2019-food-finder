import scrub_function
import csv

## this function takes the raw data set and cleans and converts it to a JSON format"

def file_conversion():
    print("Creating a clean dataset from the raw restaurant data.")
    source = 'Restaurant-Data.csv'
    target = 'Scrubbed-Restaurant-Data.csv'
    
    try:
        s = open(source, 'r')
        
    except:
        print("File not found.")
        
    else:
        print("Scrubbing data...")
        t = new_file = scrub_function.write_ordered(s,target)

        s.close()
        t.close()
        print("Conversion complete.")

    cleaning_source = 'Scrubbed-Restaurant-Data.csv'
    cleaning_target = 'Cleaned-Restaurant-Data.csv'

    try:
        s = open(cleaning_source, 'r')
        
    except:
        print("File not found.")
        
    else:
        print("Cleaning data...")
        t = new_file = scrub_function.clean_ordered(s,cleaning_target)

        s.close()
        t.close()
        print("Conversion complete.")

    json_source = 'Cleaned-Restaurant-Data.csv'
    json_target = 'Restaurant-Data.json'

    try:
        s = open(json_source, 'r')
        
    except:
        print("File not found.")
        
    else:
        print("Converting to JSON...")
        t = new_file = scrub_function.make_json(s,json_target)

        s.close()
        t.close()
        print("Conversion complete.")
    
file_conversion()
