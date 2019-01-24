import React from 'react';
import WeatherStation from './subject/weatherStation';
import Appliance from './observers/appliance';
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

    constructor(props:Props) {
        super(props);

        this.state = {
            temperature: 0
        }

        this.setTemp = this.setTemp.bind(this);
    }

    componentDidMount() {
        this.setTemp(30);
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
                        <TemperatureDisplay weatherStation={this.weatherStation}/>
                        <div className="row">
                            <div className="col-md-4 observersBlock1Style">
                                <div className="iconContainer">
                                    <Appliance weatherStation={this.weatherStation} name="fan1"/>
                                </div>
                            </div>
                            <div className="col-md-4 observersBlock2Style">
                                <div className="iconContainer">
                                    <Appliance weatherStation={this.weatherStation} name="fan2"/>
                                </div>
                            </div>
                            <div className="col-md-4 observersBlock3Style">
                                <div className="iconContainer">
                                    <Appliance weatherStation={this.weatherStation} name="ac"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button color="primary" onClick={() => this.setTemp(40)}>set temp to 40</Button>
            </div>
        );
    }
}

export default ObserverPatternUI;
