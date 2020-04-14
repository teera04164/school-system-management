import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ShowSection from "./Containers/Section/ShowSection";
import SectionCreate from "./Containers/Section/SectionCreate";
import Student from './Containers/Student'
import StudentAdd from './Containers/Student/StudentAdd'
import Group from './Containers/Group'
import GroupAdd from "./Containers/Group/GroupAdd";
import NotFound from './Containers/NotFound'
import Attendence from './Containers/Attendence'
import AttendenceAdd from "./Containers/Attendence/AttendenceAdd";
export default function BasicExample() {
  return (
    <Router>
      <div className='wrapper'>

        <Header />
        <Menu />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/sectionyear" component={ShowSection} />
            <Route exact path="/sectionyear/create" component={SectionCreate} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/student/add" component={StudentAdd} />
            <Route exact path="/group" component={Group} />
            <Route exact path="/group/add" component={GroupAdd} />
            <Route exact path="/attendence" component={Attendence} />
            <Route exact path="/attendence/add" component={AttendenceAdd} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function User() {
  return (
    <div>
      <h2>User</h2>
    </div>
  );
}
function Admin() {
  return (
    <div>
      <h2>Admin</h2>
    </div>
  );
}
function Create() {
  return (
    <div>
      <h2>Create</h2>
    </div>
  );
}
function AdminUser() {
  console.log("admin user");

  return (
    <div>
      <h2>Admin User</h2>
    </div>
  );
}