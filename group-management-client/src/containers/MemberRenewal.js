//this is for setting all members to a "holding" position so that the membership person can process all members and see which ones still need to be changed.
import React, {Component} from 'react';
import {Grid, Table, Button} from 'react-bootstrap'

class MemberRenewal extends Component {
  state = {
    members: [
      {
        id: 1,
        firstName: "Jennifer",
        lastName: "Pazos",
        email: "them@them.com",
        membership_status: "2016-2017",
      }
    ]
  }
  render() {
    const memberList = this.state.members.map((m) => {
      return (
      <tbody key={m.id}>
        <tr>
          <td>{m.firstName}</td>
          <td>{m.lastName}</td>
          <td>{m.email}</td>
          <td>{m.membership_status}</td>
          <td><Button>Renew</Button> &nbsp; <Button>Remove</Button></td>
        </tr>
      </tbody>
    )
    })
    return (
      <div className="memberrenewal">
        <Grid>
          <h1>Membership Renewal</h1>
          <h5> This is only for current members</h5>
          <br />
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Membership Status</th>
                <th></th>
              </tr>
            </thead>
            {memberList}

          </Table>
        </Grid>
      </div>
    )
  }
}
export default MemberRenewal
