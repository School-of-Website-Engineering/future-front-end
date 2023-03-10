import http from '@/utils/http';
import { WEATHER_NOW, WeatherApi, WeatherNow } from '@/api/test/index';

class WeatherService implements WeatherApi {
    getWeatherNow(): Promise<WeatherNow> {
        return http.get(WEATHER_NOW);
    }
}

export default new WeatherService();
