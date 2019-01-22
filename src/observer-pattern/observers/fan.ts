import { Subject, Observer } from '../common';

class Fan implements Observer {
    private subject: Subject | undefined;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.removeObserver(this);
    }
    update(temperature: number): void {
        if(temperature > 20) {
            console.log("It's hot here... I need to turn myself on.")
        }
        else {
            console.log("It's nice and cool... I need to turn myself off");
        }
    }

}

export default Fan;
