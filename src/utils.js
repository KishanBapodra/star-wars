export const fetchPlanets = async () => {

  let results=[];
  let url = "https://swapi.dev/api/planets/?page=1"
  
  const res = await fetch(url);
  const data = await res.json();
  results.push(...results, data.results)

  return results;
}

export const fetchMovies = async (url) => {
  try{
    const response = Promise.all(
      url.map(url => fetch(url).then(res => res.json()).then(data => data.title))
    );
    return response;
  } catch (e) {
    console.log("Error:" + e);
  }
}