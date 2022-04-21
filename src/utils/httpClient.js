const API = "http://api.themoviedb.org/3";

export function get(path) {
    fetch (API + path, {
        headers: {
            Autorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmMxMzY5YTVkNzVmNzA0MzQzNWQxY2I5NThkZjg1ZSIsInN1YiI6IjYyM2NmMTExYTM0OTExMDA1ZGNhMTNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fe1NVrBZgqpwbboIfHnMRTXoOeUm-3MZWMqMKq2wSew",
        "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => result.json());
}

//prueba este de abajo
// ??? que cosa? el cokponete?
//¿nani?


var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmMxMzY5YTVkNzVmNzA0MzQzNWQxY2I5NThkZjg1ZSIsInN1YiI6IjYyM2NmMTExYTM0OTExMDA1ZGNhMTNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fe1NVrBZgqpwbboIfHnMRTXoOeUm-3MZWMqMKq2wSew");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      // * Ajajsjjajajsjsq wenaaas
      //Wenas uwu
      //* si jala xd
      //chi uwu esta chido el microsoft xD
      
    };

    fetch("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));