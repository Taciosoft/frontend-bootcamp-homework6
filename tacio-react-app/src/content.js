import React, { Component } from 'react';
import './App.css';
import { Z_FIXED } from 'zlib';


const Content = () =>{
return(
<div>
<header className="App-header">
<p className="App-logo">React App Developer</p>
<span style={{position:'absolute',float:'right',color:'azure',right:70,padding:10,margin:3}}>
<button className="button1">Home</button>
<button className="button1">Home</button>
<button className="button1">Home</button>
<button className="button1">Home</button>
<button className="button1">Home</button>
</span>
</header>
<div style={{display: 'flex', paddingLeft: 10, paddingRight: 10, paddingTop:'10px',position:'fixed'}}>
<div style={{border: '3px solid #e8e8e8', height: '600px', width:'500px', left: 0 , top:0, bottom:0, right:0, paddingTop: 10,marginLeft: 5}}>
<img src={'https://image.ibb.co/dUH127/1.jpg'}/>
<p style={{paddingLeft:10,paddingRight:10 }}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</div>
<div style={{border: '3px solid #e8e8e8', height: '600px', width:'500px', left: 0, top:0, bottom:0, right:0, paddingTop: 10,marginLeft: 5}}>
<img src={'https://image.ibb.co/i64TFS/3.jpg'}/>
<p style={{paddingLeft:10,paddingRight:10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div style={{border: '3px solid #e8e8e8', height: '600px', width:'500px', left: 0 , top:0, bottom:0, right: 0, paddingTop: 10 ,marginLeft: 5}}>
<img src={'https://image.ibb.co/kLnepn/23.jpg'}/>
<p style={{paddingLeft:10,paddingRight:10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</div>
<footer style={{position:'fixed', bottom:0, width:'100%', backgroundColor:'#1999AA'}}>
<p>This is a footer @ React App Developer</p>

</footer>
</div>
)
}
export default Content;