import React from 'react';
import {Grid, Row, Col, ButtonToolbar, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return(
    <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} xsOffset={5}>
                <ButtonToolbar>
                  <Button bsStyle="danger" bsSize="large">
                          <Link to="/restaurants/new">
                            <Glyphicon glyph="plus">
                            </Glyphicon>
                          </Link>
                  </Button>
                </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      <h1>Dashboardo!</h1>
    </div>

  );
};

export default Dashboard;
