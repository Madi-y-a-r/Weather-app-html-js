const key = '8rkaw8Gm5KjmiB5gAzvN5zns5pIkzNZM';
  
  const getWeather = async(id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query =  `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
  }

  const getCity = async(city) => {
    
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query =  `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
  }