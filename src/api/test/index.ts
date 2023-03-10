// http://www.weather.com.cn/data/sk/101190408.html
export const WEATHER_NOW = '/data/sk/101190408.html';

export interface WeatherNow {
    weatherinfo: Record<string, never>;
}

export interface WeatherApi {
    getWeatherNow(): Promise<WeatherNow>;
}
