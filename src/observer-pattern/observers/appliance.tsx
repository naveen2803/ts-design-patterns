import React from 'react';
import { Subject, Observer } from '../common';
import { IconFanOff, IconAirCon } from '../../assets/icons';

type Props = {
    weatherStation: Subject,
    name: string
}

type State = {
    temperature: number
}

class Fan extends React.Component<Props, State> implements Observer {
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

    onOffFan() {
        switch(this.props.name) {
            case "fan1": {
                return(
                    <IconFanOff height="60" width="60" iconColor={this.state.temperature >= 25 ? "#227a18": "#999960"}/>
                );
            }
            case "fan2": {
                return(
                    <IconFanOff height="60" width="60" iconColor={this.state.temperature >= 30 ? "#227a18": "#999960"}/>
                );
            }
            case "ac": {
                return(
                    <IconAirCon height="80" width="80" iconColor={this.state.temperature >= 40 ? "#227a18": "#999960"}/>
                );
            }
        }

        return(
            <div></div>
        );
    }

    render() {
        return (
            <div>
                {this.onOffFan()}
            </div>
        );
    }
}

export default Fan;
