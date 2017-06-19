
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
     this.handleClick = this.handleClick.bind(this);
     this.handleClick2 = this.handleClick2.bind(this);
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

  handleClick(){
    this.getData("alltime");
  }

 handleClick2(){
    this.getData("recent");
  }


  render() {

    return(
      <div className ="container">

        <ol className="list-group">

          <h1 className ="text-center title">Leaderboard</h1>

          <li className ="list-group-item list-head" key="header">
            <div className="col-md-1">
            #
            </div>

            <div className="col-md-6">
            Camper Name
            </div>

            <div className="col-md-3 text-center">
              <button type="button" className="btn"   onClick={this.handleClick2}>Sort by Recent</button>
            </div>

            <div className="col-md-2 text-center">
              <button type="button" className="btn"   onClick={this.handleClick}> Sort by All Time</button>
            </div>



          </li>



          {this.state.users.map((user,index) =>


            <li className ="list-group-item" key={user.username}>

             <div className="col-md-1">
              {index +1}
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
        </ol>
      </div>
    )
  }
}




ReactDOM.render(
  <LeaderBoard />,
  document.getElementById('root')
);
