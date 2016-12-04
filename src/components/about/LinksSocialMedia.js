import React from 'react';
import './LinksSocialMedia.css';

let LinksSocialMedia = React.createClass({
    render: function () {
        return(
        <div className="links">
            <p><b><i>Follow us on social media</i></b></p>
            <div>
                <a href="https://twitter.com/shrek_this">
                    <img title="Twitter" alt="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" width="35" height="35" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100014070185975">
                    <img title="Facebook" alt="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" width="35" height="35" />
                </a>
                <a href="https://github.com/Silvave/AppJS-Teamwork">
                    <img title="Github" alt="Github" src="http://image.flaticon.com/icons/svg/23/23957.svg" width="35" height="35" style={{opacity:0.6}} />
                </a>
            </div>
        </div>
        )
    }
});

export default LinksSocialMedia;