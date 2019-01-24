import { Subject, Observer } from '../common';

class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[];

    constructor() {
        this.temperature = 0;
        this.observers = [];
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for(let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemprature(temp: number) {
        this.temperature = temp;
        this.notifyObservers();
    }
}

export default WeatherStation;
