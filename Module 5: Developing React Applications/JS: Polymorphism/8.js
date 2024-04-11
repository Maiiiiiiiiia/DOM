// Создайте полноценное консольное приложение, которое показывает текущую погоду в городе. 
// Оно работает так:

// $ node bin/weather.js berlin
// Temperature in berlin: 11C // C - Цельсий

// $ node bin/weather.js monaco
// Temperature in monaco: 26C
// Это консольное приложение обращается внутри себя к сервису погоды. 
// Сервис погоды расположен по адресу http://localhost:8080 (внутри практики). 
// Информацию по городу можно извлечь сделав GET запрос на урл /api/v2/cities/<имя города>. 
// Данные от сервиса возвращаются в виде json: { "name": "<имя города>", temperature: "<температура>" }, 
// единица измерения не указана, но это всегда градус Цельсия.


// bin/weather.js

const weather = new WeatherService(axios);
const cityName = process.argv[2];
weather.lookUp(cityName).then((data) => {
  const message = `Temperature in ${data.name}: ${data.temperature}C`;
  console.log(message);
});


// WeatherService.js

class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async lookUp(cityName) {
    const url = new URL(`cities/${cityName}`, apiUrl);
    const response = await this.httpClient.get(url.toString());
    return JSON.parse(response.data);
  }
}

export default WeatherService;