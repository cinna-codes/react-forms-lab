import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length // define this outside of what's actually being rendered; can now call on this in render
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
          onChange={this.handleMessageChange}
          value={this.state.message}
        />
        {charCount} 
      </div>
    );
  }
}

export default TwitterMessage;
