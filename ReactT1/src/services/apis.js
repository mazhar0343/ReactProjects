const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjU0YjcwNjZjMmI5M2E0ZDY3ZTVjMjE5YWFlYjhlMCIsIm5iZiI6MTc0OTE2Nzc1Mi42NTkwMDAyLCJzdWIiOiI2ODQyMmU4ODhmZjY1ZmM4MzlmMmM5MWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8EjIeo8rOEyN0zubytYOIafMqwrA6C3C2W8LiBYLbsg'
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