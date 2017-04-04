var React = require('react');
var ReactDOM = require('react-dom');

var DataProfile = {
  name : "Kevin",
  imageUrl : "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"
}
var ProfilPic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height : 100, width :100}}/>
  }
});

var ProfileName = React.createClass({
  render: function() {
    return <div> {this.props.name} </div>
  }
});

var AvatarContainer = React.createClass({
  render: function() {
    return  <div>
      <ProfileName name={this.props.profile.name}/>
      <ProfilPic imageUrl={this.props.profile.imageUrl}/> </div>
  }
});

ReactDOM.render(
  <AvatarContainer profile={DataProfile}/>,
  document.getElementById('app')
);
