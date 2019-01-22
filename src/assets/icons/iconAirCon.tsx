/**
 * Created By: Naveen Malhotra
 * Created Date: 19/01/2018(dd/mm/yyyy)
*/

import React from 'react';

type Props = {
    width?: string,
    height?: string,
    iconColor?: string
}

class IconAirCon extends React.Component<Props, {}>{
    public static defaultProps = {
        width: "32px",
        height: "32px"
    };

    render (){
        const { width, height, iconColor } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={width} height={height} x="0px" y="0px" viewBox="0 0 100 125" enableBackground="new 0 0 100 100">
                <g>
                    <path fill={iconColor} d="M10.4,31.8v8.2c0,4.8,3.7,8.7,8.4,9.1v0.1c0,0.6,0.4,1,1,1h61.4c0.6,0,1-0.4,1-1V49c4.7-0.4,8.4-4.3,8.4-9.1v-8.2  c0-5-4.1-9.1-9.1-9.1H19.5C14.5,22.6,10.4,26.7,10.4,31.8z M20.8,46.2h59.4v1.9H20.8V46.2z M12.4,31.8c0-3.9,3.2-7.1,7.1-7.1h61.9  c3.9,0,7.1,3.2,7.1,7.1v8.2c0,3.7-2.8,6.7-6.4,7.1v-1.8c0-0.6-0.4-1-1-1H19.8c-0.6,0-1,0.4-1,1V47c-3.6-0.4-6.4-3.4-6.4-7.1V31.8z"/>
                    <path fill={iconColor} d="M24.9,30.2h56.8c0.6,0,1,0.4,1,1s-0.4,1-1,1H24.9c-0.6,0-1-0.4-1-1S24.3,30.2,24.9,30.2z"/>
                    <path fill={iconColor} d="M24.9,36.8h56.8c0.6,0,1,0.4,1,1s-0.4,1-1,1H24.9c-0.6,0-1-0.4-1-1S24.3,36.8,24.9,36.8z"/>
                    <circle fill={iconColor} cx="18.8" cy="30.9" r="1.5"/>
                    <circle fill={iconColor} cx="18.8" cy="37.5" r="1.5"/>
                    <path fill={iconColor} d="M65.2,57.6c0.6,0,1,0.4,1,1s-0.4,1-1,1c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1c2.8,0,5.1,2.3,5.1,5.1s-2.3,5.1-5.1,5.1  c-0.6,0-1-0.4-1-1s0.4-1,1-1c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1c-2.8,0-5.1-2.3-5.1-5.1S62.4,57.6,65.2,57.6z"/>
                    <path fill={iconColor} d="M50.9,57.6c0.6,0,1,0.4,1,1s-0.4,1-1,1c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1c2.8,0,5.1,2.3,5.1,5.1s-2.3,5.1-5.1,5.1  c-0.6,0-1-0.4-1-1s0.4-1,1-1c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1c-2.8,0-5.1-2.3-5.1-5.1S48.1,57.6,50.9,57.6z"/>
                    <path fill={iconColor} d="M36.5,57.6c0.6,0,1,0.4,1,1s-0.4,1-1,1c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1c2.8,0,5.1,2.3,5.1,5.1s-2.3,5.1-5.1,5.1  c-0.6,0-1-0.4-1-1s0.4-1,1-1c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1c-2.8,0-5.1-2.3-5.1-5.1S33.7,57.6,36.5,57.6z"/>
                </g>
            </svg>
        );
    }
}

export default IconAirCon;
