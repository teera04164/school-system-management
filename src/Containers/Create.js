import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ControlSideBar from '../components/ControlSideBar';
import Content from '../components/Content';
import ShowSection from './Section/ShowSection';



// export default function SectionYear() {
export default class Create extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("section year");

        return (
            <div>
                <Header />
                <Menu />
                <Content name="ปีการศึกษา:สร้างใหม่">
                    <ShowSection/>
                </Content>
                <ControlSideBar />
                <Footer />
            </div>
        )
    }
}
