import React from 'react'
import { Route, Switch } from 'react-router'
import SectionYear from '../Containers/SectionYear2/index'


const routes = (
  <Switch>
            <Route exact path="/sessionyear" component={SectionYear}/>
            {/* <Route exact path="/user" component={User}/>
            <Route exact path="/user/:_id/detail" component={UserDetail}/>
            <Route exact path="/user/add" component={AddSemester}/>
            <Route exact path="/class" component = {ClassRoom}/>
            <Route exact path="/class/:_year/:_class" component = {ClassDetail}/>
            <Route exact path="/subject" component = {SubJect}/>
            <Route exact path='/subject/add' component = {addSubject}/>
            <Route exact path='/teacher' component = {Teacher}/> */}
  </Switch>
)

export default routes