import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className= 'digits-background'>
        <Grid id='landing-page' verticalAlign='middle' container>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Icon name='user' size='large' inverted color='white'></Icon>
                <Header as="h1" inverted color='white'>Multiple Users</Header>
                <Header as="h3" inverted color='white'>This address book enables any
                  number of users to register and save
                  their business contacts. You can only
                  see the contacts you have created.</Header>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Icon name='wpforms' size='large' inverted color='white'></Icon>
                <Header as="h1" inverted color='white'>Contact Info</Header>
                <Header as="h3" inverted color='white'>For each contact, you can save their
                  name, address, and phone number.</Header>
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Icon name='calendar' size='large' inverted color='white'></Icon>
                <Header as="h1" inverted color='white'>Timestamped Notes</Header>
                <Header as="h3" inverted color='white'>Each time you make contact with a
                  contact, you can write a note that
                  summarizes the conversation. This
                  note is saved along with a
                  timestamp with the contact.</Header>
              </Grid.Column>

            </Grid.Row>

          </Grid></Grid>
      </div>
    );
  }
}

export default Landing;
