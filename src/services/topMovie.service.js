const MOVIE_DB_API_KEY = '012f96a905fd71689cd49ac122859beb';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if (queryParams) {
        Object.keys(queryParams)
            .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
}
export const getTopMovies = async ({page}) => {
    const fullUrl = createMovieDbUrl('/movie/top_rated', {
        page
    });
    return fetch(fullUrl);
}
export const getMovies = async ({page}) =>
{
    let response = await fetch(createMovieDbUrl('/movie/top_rated', {
        page
    }));
    let data = await response.json();
    return data;
}

export const getMovieDetails = async ({movieId}) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
}
export const getTopShows = async ({page}) => {
    const fullUrl = createMovieDbUrl('/tv/top_rated', {
        page
    });
    return fetch(fullUrl);
}


export const getShowDetails = async ({tvId}) => {
    const fullUrl = createMovieDbUrl(`/tv/${tvId}`);
    return fetch(fullUrl);
}
