var React = require('react');
var ReactDOM = require('react-dom');
var Axios = require('axios');
import JSONTree from 'react-json-tree';

var DataApi = {
  name : "CodepenJobs",
  UrlJson : "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
}

class JsonParse extends React.Component {
  constructor(){
    super();
    this.state={
      name : "CodePenJobs",
      UrlJson : "",
      contentJson: ""
    };
  }

  render(){
      var _this = this;
      let UrlJson = this.props.data.UrlJson;
    const config = {
  method: 'get',
  url: UrlJson,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
  withCredentials: false,
  };



    Axios.request(config).then(function(result) {

    _this.setState({
      contentJson :result,
    });
  });


   return (
    <JSONTree data={this.state.contentJson}/>
    );
  }
}


ReactDOM.render(
  <JsonParse data={DataApi}/>,
  document.getElementById('app')
);
