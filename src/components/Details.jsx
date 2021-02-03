import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Details extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <div className="border-top border-dark">
          <h6 className="mt-4" style={{ color: "#abacab" }}>
            {this.props.job.type} / {this.props.job.location}
          </h6>
          <h2>{this.props.job.title}</h2>
        </div>
        <hr />
        <Row className="mt-4">
          <Col md={8}>
            <h4>Job Description</h4>
            <br />
            <div
              className="descriptionP"
              dangerouslySetInnerHTML={{ __html: this.props.job.description }}
            ></div>

            <h4 className="mt-4">How To Apply</h4>
            <p
              dangerouslySetInnerHTML={{ __html: this.props.job.how_to_apply }}
            ></p>
          </Col>
          <Col md={4}>
            <Card style={{ background: "#eeeeee" }}>
              <Card.Img variant="top" src={this.props.job.company_logo} />
              <Card.Body>
                <Card.Title>Company Name: {this.props.job.company}</Card.Title>
                {this.props.job.company_url && (
                  <a target="_blank" href={this.props.job.company_url}>
                    {this.props.job.company_url}
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;
