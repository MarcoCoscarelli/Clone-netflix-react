import { Component } from "react";
import { Col } from "react-bootstrap";
import './MovieCard.css'; 

class MovieCard extends Component {
  state = {
    isCardHovered: false,
  };

  hoverCard = () => {
    this.setState({ isCardHovered: true });
  };

  exitCard = () => {
    this.setState({ isCardHovered: false });
  };

  render() {
    let movie = this.props.movie;
    let cardBodyClass = this.state.isCardHovered ? "card-body d-flex" : "card-body d-none";

    return (
      <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
        <div
          className="card mb-2"
          onMouseEnter={this.hoverCard}
          onMouseLeave={this.exitCard}
        >
          <img
            className={`cardDimension ${this.state.isCardHovered ? "scale-up" : ""}`}
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className={cardBodyClass}>
            <div className="row">
              <div className="col d-flex justify-content-between">
                <div className="card-icons">
                  <i className="bi bi-play-circle" />
                  <i className="bi bi-plus-circle" />
                  <i className="bi bi-hand-thumbs-up" />
                </div>
                <div className="card-icons">
                  <i className="bi bi-arrow-down-circle" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex align-items-center">
                  <p className="btn btn-outline-secondary p-1 m-0 me-2">16+</p>
                  <i className="bi bi-badge-hd card-icons m-0 me-2" />
                </div>
                <div className="col-12">
                  <p className="text-white-50 h6">{movie.Title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default MovieCard;
