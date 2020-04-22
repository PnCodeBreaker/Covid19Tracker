import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Nav2 from './components/Nav2/Nav2';
import Card1 from './components/Card1/Card1';
import Card2 from './components/Card2/Card2';
import Cgraph from './components/Cgraph/Cgraph';
import Cgraph2 from './components/Cgraph/Cgraph2';
import './App.css';
import './load.css';

 class App extends Component{
   constructor(){
   super() 
     this.state = {
       data:[],
       wdata:[],
       active:'',
       confirmed:'',
       death:'',
       recovered:'',
       dActive:'',
       dConfirmed:'',
       dDeath:'',
       dRecovered:'',
       wactive:'',
       wconfirmed:'',
       wdeath:'',
       wrecovered:'',
       nwconfirmed:'',
       nwdeath:'',
       nwrecovered:'',
       droute:'total',
       croute:'india',
       Nstyle1:'fl w-50 but1 fw8',
       Nstyle2:'fl w-50 but2 fw6',
       N2style1:'fl w-50 p1 fw6',
       N2style2:'fl w-50  p2',
     }
   }
   async componentDidMount(){
    const response = await fetch('https://api.covid19india.org/data.json');
    const wresponse = await fetch('https://covid-api.com/api/reports/total');
    const data = await response.json();
    const wdata = await wresponse.json();
    this.setState({data:data});
    this.setState({wdata:wdata});
    const active = data.statewise[0].active;
    const confirmed = data.statewise[0].confirmed;
    const death = data.statewise[0].deaths;
    const recovered = data.statewise[0].recovered;
    const recent = data.cases_time_series.slice(-1)[0]
    const dConfirmed = recent.dailyconfirmed;
    const dDeath = recent.dailydeceased;
    const dRecovered = recent.dailyrecovered;
    this.setState({active:active});
    this.setState({confirmed:confirmed});
    this.setState({death:death});
    this.setState({recovered:recovered});
    this.setState({dConfirmed:dConfirmed});
    this.setState({dDeath:dDeath});
    this.setState({dRecovered:dRecovered});
    const wactive = wdata.data.active;
    const wconfirmed = wdata.data.confirmed;
    const wdeath = wdata.data.deaths;
    const wrecovered = wdata.data.recovered;
    const nwconfirmed = wdata.data.confirmed_diff;
    const nwdeath = wdata.data.deaths_diff;
    const nwrecovered = wdata.data.recovered_diff;
    this.setState({wactive:wactive});
    this.setState({wconfirmed:wconfirmed});
    this.setState({wdeath:wdeath});
    this.setState({wrecovered:wrecovered});
    this.setState({nwconfirmed:nwconfirmed});
    this.setState({nwdeath:nwdeath});
    this.setState({nwrecovered:nwrecovered});
   
}

handleClick = (inf1) => {
this.setState({croute:inf1});
}

handleClick1 = (inf2) => {
  this.setState({droute:inf2})
}

  render() {
    if(this.state.data.length ===0 || this.state.wdata.length ===0){
      return(
          <div className="cent">
          <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          </div>
          </div>
      )
    }
    else{
    let dCard1,dCard2,dCgraph,dNav1,dNav2;
    if (this.state.croute === 'india' && this.state.droute === 'total')
    {
      dNav1 = <Nav handleClick = {this.handleClick} Nstyle1={this.state.Nstyle1} Nstyle2={this.state.Nstyle2}/>
      dNav2 = <Nav2 handleClick1 = {this.handleClick1} N2style1={this.state.N2style1} N2style2={this.state.N2style2}/>
      dCard1 = <Card1 confirmed={this.state.confirmed} death ={this.state.death} />
      dCard2 = <Card2 active={this.state.active} recovered={this.state.recovered}/>
      dCgraph =  <Cgraph/>
    }  
    else if(this.state.croute === 'india' && this.state.droute === 'recent') {
      dNav1 = <Nav handleClick = {this.handleClick} Nstyle1={this.state.Nstyle1} Nstyle2={this.state.Nstyle2}/>
      dNav2 = <Nav2 handleClick1 = {this.handleClick1} N2style1={this.state.N2style2} N2style2={this.state.N2style1}/>
      dCard1 = <Card1 confirmed={this.state.dConfirmed} death ={this.state.dDeath} />
      dCard2 = <Card2 active={this.state.active} recovered={this.state.dRecovered}/>
      dCgraph = <Cgraph/>
    }
    else if(this.state.croute ==='world' && this.state.droute === 'total'){
      dNav1 = <Nav handleClick = {this.handleClick} Nstyle1={this.state.Nstyle2} Nstyle2={this.state.Nstyle1}/>
      dNav2 = <Nav2 handleClick1 = {this.handleClick1} N2style1={this.state.N2style1} N2style2={this.state.N2style2}/>
      dCard1 = <Card1 confirmed={this.state.wconfirmed} death ={this.state.wdeath} />
      dCard2 = <Card2 active={this.state.wactive} recovered={this.state.wrecovered}/>
      dCgraph = <Cgraph2 gConfirm = {this.state.wconfirmed} gRecover = {this.state.wrecovered}
        gDeath = {this.state.wdeath}
      />
    }
    else if(this.state.croute ==='world' && this.state.droute === 'recent'){
      dNav1 = <Nav handleClick = {this.handleClick} Nstyle1={this.state.Nstyle2} Nstyle2={this.state.Nstyle1}/>
      dNav2 = <Nav2 handleClick1 = {this.handleClick1} N2style1={this.state.N2style2} N2style2={this.state.N2style1}/>
      dCard1 = <Card1 confirmed={this.state.nwconfirmed} death ={this.state.nwdeath} />
      dCard2 = <Card2 active={this.state.wactive} recovered={this.state.nwrecovered}/>
      dCgraph = <Cgraph2 gConfirm = {this.state.wconfirmed} gRecover = {this.state.wrecovered}
      gDeath = {this.state.wdeath}
    />
    }
    return (
    <div className="mq1">
      <Logo/>  
      {dNav1}
      {dNav2}
      {dCard1}
      {dCard2}
      {dCgraph}    
    </div>
    )
    }
}
 }

export default App;
