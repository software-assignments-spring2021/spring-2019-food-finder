
## this function removes certain rows and columns of the dataset, based on what is useful for the project

def write_ordered(f,target):
    print("Working on your file")
    t = open(target, 'w')

    first = True
    for line in f:
        if line:
            arr = line.split(',')
            if arr[3] == '' or arr[5] == '':
                continue
            if arr[13] == 'C' or arr[13] == 'P' or arr[13] == 'Z' or arr[13] == 'G':
                continue
            for element in arr:
                if (arr.index(element) != len(arr)-1):
                    if arr.index(element) == 0:
                        continue
                    if arr.index(element) == 8:
                        continue
                    if arr.index(element) == 9:
                        continue
                    if arr.index(element) == 10:
                        continue
                    if arr.index(element) == 11:
                        continue
                    if arr.index(element) == 12:
                        continue
                    if arr.index(element) == 14:
                        continue
                    if arr.index(element) == 15:
                        continue
                    if arr.index(element) == 16:
                        continue
                    else:
                        t.write(element + ",")
                else:
                    t.write('\n')
        if (first):
            first = False
    return t

## this function filters through the scrubbed dataset, removing incorrectly formatted data

def clean_ordered(f, target):
    print("Working on your file")
    t = open(target, 'w')

    first = True
    for line in f:
        if line:
            arr = line.split(',')
            if arr[7] not in ['A', 'B', '', 'Not Yet Graded']:
                continue
            else:
                t.write(line)
    return t

## this function converts the cleaned data into JSON format using string concatenation

def make_json(f, target):
    print("Working on your file")
    t = open(target, 'w')

    first = True

    for line in f:
        if line:
            arr = line.split(',')
            arr[0] = "{\"name\": \"" + arr[0] + "\", "
            arr[1] = "\"borough\": \"" + arr[1] + "\", "
            arr[2] = "\"building_number\": \"" + arr[2] + "\", "
            arr[3] = "\"address\": \"" + arr[3] + "\", "
            arr[4] = "\"zipcode\": \"" + arr[4] + "\", "
            arr[5] = "\"phone_number\": \"" + arr[5] + "\", "
            arr[6] = "\"cuisine_type\": \"" + arr[6] + "\", "
            arr[7] = "\"grade\": \"" + arr[7] + "\"}"

            new_line = ''
            for i in range(0, 8):
                new_line = new_line + arr[i]
            t.write(new_line + '\n')
    return t
    
