import React, { Component } from 'react'


const SMALL_WIDTH = 450 ;
// const REDUCE_IN_PROPORTION = 2.5;
const withWidth = (MyComponent) => {


  return class WithWidth extends Component {
    constructor() {
      super()
      this.state = { width: this.windowWidth() }
      this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
      if (window) {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }
    
    componentWillUnmount() {
      if (window) window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
      let width = this.windowWidth()
      if (width !== this.state.width) this.setState({ width });
    }
    
    windowWidth() {
      let smallWidth = SMALL_WIDTH;
      let innerWidth = 0;
      let width;
      if (window) innerWidth = window.innerWidth;
    
      let proportion = 1;
      width = innerWidth / proportion;

      if (width > smallWidth) return width;
      else return smallWidth;
    }

    render() {
      return (
      <div style={{width: this.state.width}}>
        <MyComponent
          { ...this.props }
          screenWidth={ this.state.width }
        />
      </div>
      )
    }
  }
}

export default withWidth