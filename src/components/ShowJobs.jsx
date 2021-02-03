import React from "react";

class ShowJobs extends React.Component {
  converDateToDay = (day) => {
    let time = day.split(" ");
    time = [time[0], time[1], time[2]];
    time = time.join(",");
    time = time.replaceAll(",", " ");

    return time;
  };

  sendToDetail = (obj, id) => {
    this.props.addJob(obj);
    this.props.history.push("/details/" + id);
  };

  render() {
    return (
      <div className="mt-4 border-top border-secondary">
        <h2 className="my-3">Showing {this.props.jobs.length} jobs</h2>
        <hr />
        {this.props.jobs &&
          this.props.jobs.map((job, index) => (
            <div key={index}>
              <div className="job-box py-0 my-0">
                <div>
                  <h4
                    style={{ color: "#1d80be" }}
                    onClick={() => this.sendToDetail(job, job.id)}
                  >
                    {job.title}
                  </h4>
                  <p style={{ color: "#abacab" }}>
                    {job.company} -{" "}
                    <strong className="text-success"> {job.type}</strong>
                  </p>
                </div>
                <div>
                  <h6>{job.location}</h6>
                  <h6 className="text-right" style={{ color: "#abacab" }}>
                    {this.converDateToDay(job.created_at)}
                  </h6>
                </div>
              </div>
              <hr className="my-0 py-0" />
            </div>
          ))}
      </div>
    );
  }
}

export default ShowJobs;
