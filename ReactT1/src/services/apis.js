const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer'
    }
};

export const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        const data = await response.json();
        return data.results;

};


export const searchMovies = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, options)
    const data = await response.json();
    return data.results;
};
