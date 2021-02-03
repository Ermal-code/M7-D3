import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (obj) =>
    dispatch({ type: "ADD_JOB_TO_FAVORITE", payload: obj }),
  removeFromFavorites: (obj) =>
    dispatch({ type: "REMOVE_JOB_FROM_FAVORITE", payload: obj }),
  addJob: (obj) => dispatch({ type: "TO_DETAILS", payload: obj }),
});

class Job extends React.Component {
  state = {
    fav: false,
  };
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

  addToFav = (obj) => {
    this.setState({ fav: true });
    this.props.addToFavorites(obj);
  };
  removeFromFav = (obj) => {
    this.setState({ fav: false });
    this.props.removeFromFavorites(obj);
  };

  componentDidMount = () => {
    let isFav = this.props.favorites.find(
      (job) => job.id === this.props.theJob.id
    );
    if (isFav) {
      this.setState({ fav: true });
    }
  };

  render() {
    const job = { ...this.props.theJob };
    return (
      <>
        <div className="job-box py-0 my-0">
          <div>
            <div className="d-flex align-items-center">
              {!this.state.fav ? (
                <i
                  className="far fa-star fa-2x mr-2  text-warning"
                  onClick={() => this.addToFav(job)}
                ></i>
              ) : (
                <i
                  className="fas fa-star fa-2x mr-2 text-warning"
                  onClick={() => this.removeFromFav(job)}
                ></i>
              )}

              <h4
                style={{ color: "#1d80be", display: "inline" }}
                onClick={() => this.sendToDetail(job, job.id)}
              >
                {job.title}
              </h4>
            </div>
            <p className="ml-5" style={{ color: "#abacab" }}>
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
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
