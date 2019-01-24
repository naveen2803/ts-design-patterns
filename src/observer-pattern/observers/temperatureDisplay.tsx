import React from 'react';
import { Subject, Observer } from '../common';

type Props = {
    weatherStation: Subject
}
type State = {
    temperature: number
}

class TemperatureDisplay extends React.Component<Props, State>  implements Observer {
    private subject: Subject | undefined;

    constructor(props:Props) {
        super(props);

        this.state = {
            temperature: 0
        };

        this.subject = props.weatherStation;
        props.weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        this.setState({
            temperature: temperature
        });
    }

    showDisplay() {
        return(
            <div className="row displayContainer">
                <span className="staticTextDisplay">Temperature today is:</span>
                <span className="tempDisplay">{this.state.temperature}</span>
            </div>
        );

        return(
            <div></div>
        );
    }

    render() {
        return (
            <div>
                {this.showDisplay()}
            </div>
        );
    }

}

export default TemperatureDisplay;
