import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/carworkslogo.png";
import "../../styles/global.css";
import "../../styles/regular_components/dashboard.css";
import { Row, Col } from "react-bootstrap"; // Corrected import

const Dashboard = () => {
  return (
    <div>
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <Row>
          <Col className="Col-md-6">
            <div className="cards my-3 mx-1">
              <h3 className="cardtitle">This year</h3>
              <p>Website Visits : 0</p>
              <p>Orders recieved : 0</p>
              <p>Orders completed : 0</p>
              <p>Returns : 0</p>
            </div>
          </Col>
          <Col className="Col-md-6 ">
            <div className="cards my-3 mx-1">
              <h3 className="cardtitle">All time</h3>
              <p>Website Visits : 0</p>
              <p>Orders recieved : 0</p>
              <p>Orders completed : 0</p>
              <p>Returns : 0</p>
            </div>
          </Col>
        </Row>
        <Row className="Row">
          <Col className="Col-md-4 ">
            <div className="cards my-3 mx-1">
              <h3 className="cardtitle">Today</h3>
              <p>Website Visits : 0</p>
              <p>Orders recieved : 0</p>
              <p>Orders completed : 0</p>
              <p>Returns : 0</p>
            </div>
          </Col>
          <Col className="Col-md-4 ">
            <div className="cards my-3 mx-1">
              <h3 className="cardtitle">This week</h3>
              <p>Website Visits : 0</p>
              <p>Orders recieved : 0</p>
              <p>Orders completed : 0</p>
              <p>Returns : 0</p>
            </div>
          </Col>
          <Col className="Col-md-4">
            <div className="cards my-3 mx-1">
              <h3 className="cardtitle">This month</h3>
              <p>Website Visits : 0</p>
              <p>Orders recieved : 0</p>
              <p>Orders completed : 0</p>
              <p>Returns : 0</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
