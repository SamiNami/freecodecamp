var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;

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

  updateRecipeBook(title,ingreedients) {
    let recipeBook = this.state.recipeBook.slice();

    const newObj = {
      title: title,
      ingreedients: ingreedients
    }

    recipeBook.push(newObj);
    this.setState({recipeBook});

    console.log(recipeBook);
  }

  render() {

    return (
			 <div className="container">

					<div className="well well">
               {this.state.recipeBook.map((recipe) =>
                <div>{recipe.title}</div>)}
					</div>

        <div className="row">
          <ModalButton updateRecipeBook={this.updateRecipeBook.bind(this)}/>
        </div>
      </div>
    )
  }
}

const ModalButton = React.createClass({


  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FormGroup>
              <ReactBootstrap.ControlLabel>Add Recipe</ReactBootstrap.ControlLabel>
              <FormControl type="text" placeholder="Recipe Name" ref="title"/>
            </FormGroup>


            <FormGroup>
              <ReactBootstrap.ControlLabel>Ingredients</ReactBootstrap.ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter ingredients separated by comma" ref="ingreedients"/>
            </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={() => {this.handleClick()} }>Add Recipe</Button>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
  getFormControlNodeTitle: function() {
    // Get the underlying <input> DOM element
    return ReactDOM.findDOMNode(this.refs.title);
  },
  getFormControlNodeIngreedients: function() {
    return ReactDOM.findDOMNode(this.refs.ingreedients);
  },
  handleClick: function(){
    const title = this.getFormControlNodeTitle().value;
    const ingreedients = this.getFormControlNodeIngreedients().value.split(",");
    this.props.updateRecipeBook(title,ingreedients);
    this.setState({ showModal: false });
  }
});





ReactDOM.render(
  <Box />,
  document.getElementById('root')
);
