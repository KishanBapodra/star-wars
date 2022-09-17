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

export const fetchSpecies = async (url) => {
  
  let results = [];

  try {
    let url = "https://swapi.dev/api/species/?page=1";
    do {
      const res = await fetch(url)
      const data = await res.json();
      data.results.forEach(ele => {
        if(ele.designation === 'reptilian' || ele.classification === 'reptilian' || ele.designation === 'reptile' || ele.classification === 'reptile') {
          results.push(ele);
        }
      });
      url=data.next;
    } while (url !== null)
  } catch (e) {
    console.log("Error:" + e);
  }
  return results;
}

export const fetchPlnts = async (url) => {
  try {
    const response = Promise.all(
      url.map(url => fetch(url).then(res => res.json()).then(data => data))
    );
    return response;
  } catch (e) {
    console.log("Error:" + e);
  }
}