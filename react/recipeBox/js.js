


class Box extends React.Component {

	constructor(props) {
        super(props);

        this.state = {recipeBook: [
          {
           title: "tomatosoup",
           ingreedients: ["tomato","water"]
          },
          {
           title: "pizza",
           ingreedients: ["tomato","pineapple","ham"]
          }
        ]};


  }
  render() {

    return (
			 <div className="container">

					<div className="row card">
            <div className="">{this.state.recipeBook[0].title}</div>
					</div>


        <div className="row">
          <button type="button" className="btn"   onClick={() => { this.props.getData("alltime") }}> Add Rescipe</button>
        </div>
      </div>
    )
  }

}


ReactDOM.render(
  <Box />,
  document.getElementById('root')
);
