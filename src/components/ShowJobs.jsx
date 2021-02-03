import React from "react";
import Job from "./Job";

class ShowJobs extends React.Component {
  render() {
    return (
      <div className="mt-4 border-top border-secondary">
        <h2 className="my-3">Showing {this.props.jobs.length} jobs</h2>
        <hr />
        {this.props.jobs &&
          this.props.jobs.map((job, index) => (
            <div key={index}>
              <Job
                // addJob={this.props.addJob}
                theJob={job}
                history={this.props.history}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default ShowJobs;
