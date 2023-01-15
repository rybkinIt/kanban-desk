import Backlog from "./Backlog";
import List from "../List/List";
import React from "react";

const MainSelection = () => {

  return(<div className='main-selection-container'>
      <Backlog/>
    <List title={'Ready'} currentStatus={2}/>
    <List title={'In Progress'} currentStatus={3}/>
    <List title={'Finish'} currentStatus={4}/>
      </div>
  )
}

export  {MainSelection}