import React, { Component } from 'react';
import './MainCarousal.css';
import AntMan from './image/ant-man.png';
import AntManLogo from './image/ant-man-logo.png';
import $ from 'jquery';

class MainCarousal extends Component {

    componentDidMount() {
        
        // $(document).ready(function() {
        //     $('#autoWidth').lightSlider({
        //         autoWidth:true,
        //         loop:true,
        //         onSliderLoad: function() {
        //             $('#autoWidth').removeClass('cS-hidden');
        //         } 
        //     });  
        //   });

          
    }
    
    render() {
        return (
            <div className = "container-fluid">
                <ul id="autoWidth" class="cs-hidden">
                    <li className = "item-a">
                        <div className = "box">
                            <h4 class="marvel">MARVEL</h4>
                            <img src = {AntMan} className = "model"></img>
                            <div className = "details">
                                <img src = {AntManLogo} style={{width:"50px",height:"auto"}}></img>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </li>
                    <li className = "item-a">
                        <div className = "box">
                            <h4 class="marvel">MARVEL</h4>
                            <img src = {AntMan} className = "model"></img>
                            <div className = "details">
                                <img src = {AntManLogo} style={{width:"50px",height:"auto"}}></img>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </li>
                    <li className = "item-a">
                        <div className = "box">
                            <h4 class="marvel">MARVEL</h4>
                            <img src = {AntMan} className = "model"></img>
                            <div className = "details">
                                <img src = {AntManLogo} style={{width:"50px",height:"auto"}}></img>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MainCarousal;