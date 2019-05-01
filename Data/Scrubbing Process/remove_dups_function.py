
def remove_duplicates(f, target):
    print("Working on your file")
    t = open(target, 'w')

    seen = set()                                            # set will keep track of duplicates

    for line in f:
        arr = line.split(',')
        restaurant_and_address = arr[0] + arr[2] + arr[3]   # unique key created with restaurant name and address
        if restaurant_and_address in seen:
            continue
        else:
            seen.add(restaurant_and_address)                # check if the restaurant with the specific address is already in the set
            t.write(line)
    return t
