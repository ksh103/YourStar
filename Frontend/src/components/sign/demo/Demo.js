import React, { Component } from 'react';
import { render } from 'react-dom';

import CanvasDraw from '../';

export default class Demo extends Component {
  state = {
    color: 'black',
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 12,
    backgroundImg:
      'https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg',
  };

  componentDidMount() {
    // 색깔 컬러 고정 시킬 수 있음
    // let's change the color randomly every 2 seconds. fun!
    // window.setInterval(() => {
    //   this.setState({
    //     color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    //   })
    // }, 2000)
    // let's change the background image every 2 seconds. fun!
    //   window.setInterval(() => {
    //     if (
    //       this.state.imgs &&
    //       this.state.imgs.length &&
    //       this.state.backgroundImg
    //     ) {
    //       let img = '';
    //       let imgs = this.state.imgs;
    //       for (let i = 0; i < imgs.length; i++) {
    //         if (this.state.backgroundImg !== imgs[i]) {
    //           img = imgs[i];
    //         }
    //       }
    //       this.setState({
    //         backgroundImg: img,
    //       });
    //     }
    //   }, 2000);
  }
  render() {
    return (
      <div>
        <h1>React Canvas Draw</h1>
        <div>
          <button
            onClick={() => {
              console.log(
                this.saveableCanvas.getDataURL(
                  'jpg',
                  this.state.backgroundImg,
                  ''
                )
              );
              alert('DataURL written to console');
            }}
          >
            GetDataURL
          </button>
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          imgSrc={this.state.backgroundImg}
        />
      </div>
    );
  }
}
