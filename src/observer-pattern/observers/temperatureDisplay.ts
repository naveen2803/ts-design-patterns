import { Subject, Observer } from '../common';

class TemperatureDisplay implements Observer {
    private subject: Subject | undefined;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.removeObserver(this);
    }
    update(temperature: number): void {
        console.log("TempratureDisplay: I need to update the display");
    }

}

export default TemperatureDisplay;
