import React from "react";
import Job from "./Job";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

const mapStateToProps = (state) => state;
class Favorites extends React.Component {
  render() {
    const favorites = this.props.favorites;
    return (
      <Container>
        <div className="mt-5 border-top border-secondary">
          <h2 className="my-3">
            {favorites.length > 0
              ? `Showing ${favorites.length} favorite ${
                  favorites.length === 1 ? "job" : "jobs"
                }`
              : "You have no favorite jobs"}
          </h2>
          <hr />
          {favorites &&
            favorites.map((job, index) => (
              <div key={`${index}haha`}>
                <Job
                  // addJob={this.props.addJob}
                  theJob={job}
                  history={this.props.history}
                />
              </div>
            ))}
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Favorites);
