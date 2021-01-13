const React = require('react')

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      parentFunction: props.parentFunction
    }
    this.handleChange = this.handleChange.bind(this)
  }

  

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  childText = 'childText';

  childFunction = () => {
    this.props.parentFunction(this.childText);
  }


  render() {
    return (
      <div>
        <button onClick={this.childFunction}>click</button>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
      </div>
    );
  }
}

export default Upload;