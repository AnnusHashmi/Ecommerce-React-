import React, { Component } from 'react';
import img from './assets/slider.jpg'
import './slider.css'
import {withRouter , Link} from 'react-router-dom';
 
class Slider extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        const M = window.M
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {indicators : false, height : 600 });
          });
    }

    render(){
        return(
            <div>
                
                <div class="slider ">
                    <ul class="slides">
                    <li>
                        <img src={img} className='img' />
                        <div class="caption center-align">
                        <div>
                            <h2>IFRAH'S COLLECTIONS</h2>
                            <h4 class="light black-text text-lighten-1">Premimium quality frocks for baby and her mother</h4>
                            <a class="waves-effect waves-light btn-large" onClick={() => {this.props.history.push('/homepage')}}> SHOW ALL PRODUCTS </a>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Slider);