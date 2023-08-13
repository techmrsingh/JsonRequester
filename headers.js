const ENV_HEADERS = {
    dev: {
        'Authorization': 'Bearer DEVELOPMENT_TOKEN_HERE',
        'Content-Type': 'application/json',
        'X-Environment': 'Development'
    },
    stag: {
        'Authorization': 'Bearer STAGING_TOKEN_HERE',
        'Content-Type': 'application/json',
        'X-Environment': 'Staging'
    },
    prod: {
        'Authorization': 'Bearer PRODUCTION_TOKEN_HERE',
        'Content-Type': 'application/json',
        'X-Environment': 'Production'
    }
};
