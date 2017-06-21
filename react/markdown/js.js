
class LeaderBoard extends React.Component{

   constructor(props) {
    super(props);

    this.state = {
      users: [{
        username: "Loading...",
        recent: "Loading...",
        alltime: "Loading..."
      }],
      url: "recent"
    };

  }
  // is invoked after the component is mounted! Great for ajax requests.
  componentDidMount() {
    this.getData("recent");
  }

  getData(url){
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/" + url)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  }


  render() {

    return(
      <div className ="container">
        <ol className="list-group">
          <h1 className ="text-center title">Leaderboard</h1>

          <ListHeader users={this.state.users} getData ={this.getData.bind(this)} />
          <ListItems users={this.state.users}/>

        </ol>

      </div>
    )
  }
}

class ListHeader extends React.Component{

  render(){
    return(
      <li className ="list-group-item list-head" key="header">

              <div className="col-md-1">
              #
              </div>

              <div className="col-md-6">
              Camper Name
              </div>

              <div className="col-md-3 text-center">
                <button type="button" className="btn"  onClick={() => { this.props.getData("recent") }}>Sort by Recent</button>
              </div>

              <div className="col-md-2 text-center">
                <button type="button" className="btn"   onClick={() => { this.props.getData("alltime") }}> Sort by All Time</button>
              </div>

            </li>
    )
  }
}

class ListItems extends React.Component{

  render(){
    return(<div>
        {this.props.users.map((user,index) =>

            <li className ="list-group-item" key={user.username}>

             <div className="col-md-1">
              {index + 1}
             </div>

             <div className="col-md-6">
              <img className="img-thumbnail" src={user.img}/>
              <a href={"https://www.freecodecamp.com/" + user.username}>{user.username}</a>
             </div>

             <div className="col-md-3 text-center">
              {user.recent}
             </div>

             <div className="col-md-2 text-center">
              {user.alltime}
             </div>

            </li>
          )}
      </div>

    )
  }

}


ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('root')
);
