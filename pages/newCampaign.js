import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component{
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    console.log(campaigns);
  }

render() {
  return (
    <h1> This is the new campaign page! </h1>
  );
}
}
