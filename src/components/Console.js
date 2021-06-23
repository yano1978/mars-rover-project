import React, { Component } from 'react';
import Rover from './Rover';
import RoverWrapper from './RoverWrapper';

export default class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                left: 0,
                top: 540,
                position: "absolute"
            },
            showWrapper: false,
            disabled: true
        };

        this.showRover = this.showRover.bind(this);
        this.hideRover = this.hideRover.bind(this);
        this.inputCoordinateX = this.inputCoordinateX.bind(this);
        this.inputCoordinateY = this.inputCoordinateY.bind(this);
    }
    inputCoordinateX(e) {
        this.setState({ x: e.target.value });
    }
    inputCoordinateY(e) {
        this.setState({ y: e.target.value });
    }
    showRover() {
        this.setState({ showWrapper: true, disabled: false});
    }
    hideRover() {
        this.setState({ showWrapper: false, disabled: true });
    }
    render() {
        const setCoordinates = () => {
            const BaseValue =  60;
            console.log('Coordinate x: ', this.state.x);
            console.log('Coordinate y: ', this.state.y);
            const inputX = this.state.x*BaseValue;
            const inputY = this.state.y*BaseValue;
            const topPrevPos = document.querySelector('.rover').style.left;
            document.querySelector('.rover').style.left = topPrevPos-inputX+'px';
            document.querySelector('.rover').style.top = inputY+'px';
        }
        const wrapper = this.state.showWrapper ? (
            <RoverWrapper>
                <Rover style={this.state.style} />
            </RoverWrapper>
        ) : null;
        return (
                <nav>
                    <button onClick={this.showRover}>Launch Mission</button>
                    <button onClick={this.hideRover}>Abort Mission</button>
                    {wrapper}
                    <input type="text" id="x" name="x" placeholder="Insert coordinate X..." onChange={this.inputCoordinateX} />
                    <input type="text" id="y" name="y" placeholder="Insert coordinate Y..." onChange={this.inputCoordinateY} />
                    <button disabled={this.state.disabled} onClick={() => {setCoordinates()}}>Move</button>
                </nav>
        )
    }
}
