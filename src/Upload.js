const React = require('react')
var url = 0;

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fileUrl: null,
      parentFunction: props.parentFunction
    }
  }
  
  

  childFunction = (e) => {
    e.preventDefault();
    url = document.getElementById('url').value
    this.props.parentFunction(url); 
  }

  render() {
    return (
      <div>
        <input type="text" formMethod="POST" id="url" onChange={this.childFunction}/>
      </div>
    );
  }
}

export default Upload;