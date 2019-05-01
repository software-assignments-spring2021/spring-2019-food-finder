import scrub_function
import remove_dups_function
import csv

## this function takes the cleaned data set, removes duplicates, and converts it to a JSON format"

def file_conversion():
    print("Removing duplicates from the scrubbed restaurant data.")
    source = 'Cleaned-Restaurant-Data.csv'
    target = 'Dups-Removed-Data.csv'
    
    try:
        s = open(source, 'r')
        
    except:
        print("File not found.")
        
    else:
        print("Removing dups...")
        t = new_file = remove_dups_function.remove_duplicates(s,target)

        s.close()
        t.close()
        print("Conversion complete.")

## convert the newly scrubbed dataset to JSON using a function in scrub_function.py
        
    json_source = 'Dups-Removed-Data.csv'
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

## note to reimport JSON:
## mongoimport --db restaurants --collection restaurantData --drop --file <the complete path to User-Data.json from your computer> */
## How I did it: mongoimport --db restaurants --collection restaurantData --drop --file C:\Users\EnemyField\Documents\Desktop\Agile\Food-Finder\Data\Restaurant-Data.json*/
