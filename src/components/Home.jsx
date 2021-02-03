import React from "react";
import { Form, Col, Container, Button, Spinner } from "react-bootstrap";
import ShowJobs from "./ShowJobs";

class Home extends React.Component {
  state = {
    loading: false,
    data: [],
    addSearchOptions: {
      description: "backend",
      location: "berlin",
    },
    showPopover: false,
  };

  popOverToggle = () => {
    this.setState({ showPopover: !this.state.showPopover });
  };

  updateCommentField = (e) => {
    let addSearchOptions = { ...this.state.addSearchOptions };
    let currentId = e.currentTarget.id;

    addSearchOptions[currentId] = e.currentTarget.value;

    this.setState({ addSearchOptions });
  };

  fetchJobs = async (e) => {
    e.preventDefault();
    try {
      this.setState({ loading: true });
      let url = `/positions.json?description=${this.state.addSearchOptions.description}&location=${this.state.addSearchOptions.location}`;

      let response = await fetch(url);
      let data = await response.json();

      this.setState({ data });
      if (response.ok) {
        this.setState({
          ...this.state,
          addSearchOptions: {
            description: "",
            location: "",
          },
          loading: false,
        });
      } else {
        this.setState({
          ...this.state,
          addSearchOptions: {
            description: "",
            location: "",
          },
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Container className="my-5">
          <Form onSubmit={this.fetchJobs}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  type="text"
                  id="description"
                  placeholder="Enter job description"
                  value={this.state.addSearchOptions.description}
                  onChange={this.updateCommentField}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  placeholder="Enter location"
                  value={this.state.addSearchOptions.location}
                  onChange={this.updateCommentField}
                />
              </Form.Group>
              <Button
                type="submit"
                variant="success"
                className="ml-3 mt-3"
                style={{ height: "50%", alignSelf: "center" }}
              >
                Search
              </Button>
            </Form.Row>
          </Form>

          {this.state.loading ? (
            <div className="d-flex justify-content-center mt-4">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            this.state.data.length > 0 && (
              <ShowJobs jobs={this.state.data} history={this.props.history} />
            )
          )}
        </Container>
      </>
    );
  }
}

export default Home;
