export const getParameters = (category, rawResponse) => {
    const parameters = {
        'planets': {
            'title': rawResponse.name,
            'countFilms': rawResponse.films.length,
            'datasets':{
                'Population': rawResponse.population,
                'Climate': rawResponse.climate,
                'Terrain': rawResponse.terrain
            }
        },
        'starships': {
            'title': rawResponse.name,
            'countFilms': rawResponse.films.length,
            'datasets':{
                'Model': rawResponse.model,
                'Manufacturer': rawResponse.manufacturer,
                'Crew': rawResponse.crew
            }
        }, 
        'vehicles': {
            'title': rawResponse.name,
            'countFilms': rawResponse.films.length,
            'datasets':{
                'Model': rawResponse.model,
                'Manufacturer': rawResponse.manufacturer,
                'Passengers': rawResponse.passengers
            }
        },
        'people': {
            'title': rawResponse.name,
            'countFilms': rawResponse.films.length,
            'datasets':{
                'Height': rawResponse.height,
                'Mass': rawResponse.mass,
                'Gender': rawResponse.gender
            }
        }, 
        'films': {
            'title': rawResponse.name,
            'datasets':{
                'Director': rawResponse.director,
                'Producer': rawResponse.producer,
                'Release Date': rawResponse.release_date
            }
        },
        'species': {
            'title': rawResponse.name,
            'countFilms': rawResponse.films.length,
            'datasets':{
                'Classification': rawResponse.classification,
                'Designation': rawResponse.designation,
                'Language': rawResponse.language
            }
        }
    }
    return parameters[category]
};
