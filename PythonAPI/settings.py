DOMAIN = {
    'restaurant': {
        'schema': {
            'name': {
                'type': 'string'
            },
            'borough': {
                'type': 'string'
            },
            'building_number': {
                'type': 'string',
                 'unique': True
            },
            'address': {
                'type': 'string'
            },
            'zipcode': {
                'type': 'string'
            },
            'phone_number': {
                'type': 'string'
            },
            'cuisine_type': {
                'type': 'string'
            }

        }
    }
}