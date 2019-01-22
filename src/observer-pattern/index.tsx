import React from 'react';
import WeatherStation from './subject/weatherStation';
import Fan from './observers/fan';
import TemperatureDisplay from './observers/temperatureDisplay';

import { Button } from 'reactstrap';
import { IconFanOff, IconAirCon } from '../assets/icons';

import './index.css';

type Props = {

}
type State = {
    temperature: number;
}

class ObserverPatternUI extends React.Component<Props, State>{
    private weatherStation: WeatherStation = new WeatherStation;
    private temperatureDisplay: TemperatureDisplay = new TemperatureDisplay(this.weatherStation);
    private fan: Fan = new Fan(this.weatherStation);

    constructor(props:Props) {
        super(props);

        this.state = {
            temperature: 28
        }

        this.weatherStation.registerObserver(this.temperatureDisplay);
        this.weatherStation.registerObserver(this.fan);
        this.setTemp = this.setTemp.bind(this);
    }

    setTemp(temp: number) {
        this.weatherStation.setTemprature(temp);
        this.setState({
            temperature: temp
        });
    }

    render (){
        return (
            <div>
                <div className="mainContainer centerStyle">
                    <div className="container">
                        <div className="row displayContainer">
                            <span className="staticTextDisplay">Temperature today is:</span>
                            <span className="tempDisplay">{this.state.temperature}</span>
                        </div>
                        <div className="row">
                            <div className="col-md-4 observersBlock1Style">
                                <div className="iconContainer">
                                    <IconFanOff height="60" width="60" iconColor={this.state.temperature >= 25 ? "#227a18": "#999960"}/>
                                </div>
                            </div>
                            <div className="col-md-4 observersBlock2Style">
                                <div className="iconContainer">
                                    <IconFanOff height="60" width="60" iconColor={this.state.temperature >= 30 ? "#227a18": "#999960"}/>
                                </div>
                            </div>
                            <div className="col-md-4 observersBlock3Style">
                                <div className="iconContainer">
                                    <IconAirCon height="80" width="80" iconColor={this.state.temperature >= 35 ? "#227a18": "#999960"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ObserverPatternUI;
