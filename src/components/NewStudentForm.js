import React from "react";
import "../styles.css";
class NewStudentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addStudent}>
        <div className="form-div">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.props.name}
            placeholder="Harry Potter"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-div">
          <label>Identity:</label>
          <input
            type="text"
            name="identity"
            value={this.props.identity}
            placeholder="Statement that describes yourself"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-div">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={this.props.age}
            placeholder="Age is just a number..."
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-div">
          <label>Best Friends:</label>
          <input
            type="text"
            name="bestFriend"
            value={this.props.bestFriend}
            placeholder="Who are your closest friend(s)?"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-div">
          <label>Image:</label>
          <input
            type="text"
            name="img"
            value={this.props.img}
            placeholder="http://www......link here"
            onChange={this.props.handleChange}
          />
        </div>
        <button>Add New Student</button>
      </form>
    );
  }
}

export default NewStudentForm;
