import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import {
  Button, Form, FormGroup,
  Label, Input, Col
} from 'reactstrap';

import "../../../../node_modules/video-react/dist/video-react.css";

const sources = {
  //HortumluCalismalar:'../UygulamaVideolar/HortumluCalismalar.3gp',
  OlayYeri: '../UygulamaVideolar/OlayYeri.3gp',
  SulamaSistemleri:'../UygulamaVideolar/SulamaSistemleri.3gp',
  SulamaSistemleri2:'../UygulamaVideolar/SulamaSistemleri2.3gp',
  SuPatlamasiMudahale:'../UygulamaVideolar/SuPatlamasiMudahale.3gp',
  VanaBaglama:'../UygulamaVideolar/VanaBaglama.3gp',
  VanaCalismasi:'../UygulamaVideolar/VanaCalismasi.3gp',
  YolSulamaSistemi:'../UygulamaVideolar/YolSulamaSistemi.3gp'
  
};


export default class Project extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['bunnyMovie']
    };

    //this.play = this.play.bind(this);
    //this.pause = this.pause.bind(this);
    //this.load = this.load.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref="player">
          <source src={this.state.source} />
        </Player>
        <br/>
        <div className="pb-3">
          {/* <Button onClick={this.changeSource('HortumluCalismalar')} className="mr-3">Hortum Uygulama</Button> */}
          <Button onClick={this.changeSource('OlayYeri')} className="mr-3">Olay Yerleri</Button>
          <Button onClick={this.changeSource('SulamaSistemleri')} className="mr-3">Sulama Sistemi</Button>
          <br/><br/>
          <Button onClick={this.changeSource('SulamaSistemleri2')} className="mr-3">Sulama Sistemi 2</Button>
          <Button onClick={this.changeSource('SuPatlamasiMudahale')} className="mr-3">Su Patlaması</Button>
          <br/><br/>
          <Button onClick={this.changeSource('VanaCalismasi')} className="mr-3">Vana Çalışması</Button>
          <Button onClick={this.changeSource('YolSulamaSistemi')} className="mr-3">Yol Sulama Sistemi</Button>
        </div>
      </div>
    );
  }
}
