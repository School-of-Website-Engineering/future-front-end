// http://www.weather.com.cn/data/sk/101190408.html
import http, { Response } from '@/utils/http';

export const WEATHER_NOW = '/data/sk/101190408.html';

export interface WeatherNow {
	weatherinfo: Record<string, never>;
}

export interface WeatherApi {
	getWeatherNow(): Promise<Response>;
}

class WeatherService implements WeatherApi {
    getWeatherNow(): Promise<Response> {
        return http.get(WEATHER_NOW);
    }
}

export default new WeatherService();
