
import { Component } from 'react';
import ReactDOM from 'react-dom';

class RoverWrapper extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }
  
    componentDidMount() {
        document.getElementsByClassName('grid-square')[0].appendChild(this.el);
    }
  
    componentWillUnmount() {
        document.getElementsByClassName('grid-square')[0].removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }
  }

  export default RoverWrapper;