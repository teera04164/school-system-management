import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ControlSideBar from '../components/ControlSideBar';
import Content from '../components/Content';
import ShowSection from './Section/ShowSection';
import SectionCreate from './Section/SectionCreate';



// export default function SectionYear() {
export default class SectionYear extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("section year");
        return (
            <h1>
                Section 1
                </h1>
        )
    }
}
