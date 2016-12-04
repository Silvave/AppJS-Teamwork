import React, {Component} from 'react';
import './AboutPage.css';
import Map from './Map';
import ContactForm from './ContactForm';
import LinksSocialMedia from './LinksSocialMedia';

export default class AboutPage extends Component {
    render() {
        return (
            <table>
                <tr><td><ContactForm/></td><td><Map/></td><td className="media"><LinksSocialMedia/></td></tr>
            </table>
        )
    }
}
