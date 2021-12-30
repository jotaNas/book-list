import React, { Component } from "react";
//import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="List">
        {data?.map((item, index) => (
          <div className="Item" key={index}>
            <p>👥 {item.author}</p>
            <h3>📕 {item.title}</h3>
            <p>
              <a href={item.url} target="_blank" rel="noreferrer">
                🔗 {item.url}
              </a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
