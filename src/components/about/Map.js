import React from 'react';
import './Map.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let Map = React.createClass({

    render: function () {
        return(
            <ReactCSSTransitionGroup transitionName="map" transitionAppear={true}>
            <div >
                <h3>Shrekt.js Office Location</h3>
                <a href="https://www.google.com/maps/place/Software+University/@42.666775,23.352277,16z/data=!4m5!3m4!1s0x0:0xdf53fcbcd8e758d7!8m2!3d42.666775!4d23.352277?hl=en"><img id="map" src="https://external.fsof3-1.fna.fbcdn.net/static_map.php?v=27&osm_provider=3&size=400x400&zoom=17&markers=icon%3Aimages%2Fplaces%2Fmap%2Fbright-pink-pin.png%7C42.666775%2C23.352277&language=en_US"></img></a>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
});

export default Map;