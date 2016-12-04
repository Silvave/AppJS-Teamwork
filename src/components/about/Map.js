import React from 'react';
import './Map.css';

let Map = React.createClass({
    render: function () {
        return(
            <div >
                <h3>Shrekt.js Office Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.759210640056!2d23.35185481570928!3d42.666457759798895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf53fcbcd8e758d7!2z0KHQvtGE0YLRg9C10YDQtdC9INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgKNCh0L7RhNGC0KPQvdC4KQ!5e0!3m2!1sbg!2sbg!4v1480860188724" ></iframe>
            </div>
        )
    }
});

export default Map;