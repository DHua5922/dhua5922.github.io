import React, {Component} from 'react';
import './PageLink.scss';

export class PageLink extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <a href={`${this.props.label}`.toLowerCase()}>
        <div className="square">
            <h1><b>{this.props.label}</b></h1>
        </div>
      </a>
    );
  }
}
