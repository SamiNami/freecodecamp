var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Collapse = ReactBootstrap.Collapse;
var Well = ReactBootstrap.Well;
var Table = ReactBootstrap.Table;

class Box extends React.Component {

	constructor(props) {
        super(props);

        this.state = {recipeBook: [

        ]};


  }
  // get things from local storage
  componentDidMount(){
    let recipeBook = JSON.parse(localStorage.getItem('data')) || [];
    this.setState({recipeBook});
  }

  updateRecipeBook(title,ingredients) {
    let recipeBook = this.state.recipeBook.slice();

    const newObj = {
      title: title,
      ingredients: ingredients
    }

    recipeBook.push(newObj);
    localStorage.setItem('data', JSON.stringify(recipeBook));
    this.setState({recipeBook});
  }

  deleteIngredient(titel) {

    let array = this.state.recipeBook.filter(function(recipe) {
    return recipe.title !== titel;
    });
    localStorage.setItem('data', JSON.stringify(array));
    this.setState({recipeBook:array});
  }

  editSingleIngreedient(title,ingredients) {

    let array = this.state.recipeBook.filter(function(recipe) {
    return recipe.title !== title;
    });


    const newObj = {
      title: title,
      ingredients: ingredients
    }

    array.push(newObj);
    localStorage.setItem('data', JSON.stringify(array));
    this.setState({recipeBook:array});
  }

  render() {

    return (
			 <div className="container">

					<div className="well">

               {this.state.recipeBook.map((recipe) =>
                <Dropdown deleteIngredient={this.deleteIngredient.bind(this)} editSingleIngreedient={this.editSingleIngreedient.bind(this)}
                  title={recipe.title} ingredients= {recipe.ingredients} />)}
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
              <FormControl componentClass="textarea" placeholder="Enter ingredients separated by comma" ref="ingredients"/>
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
  getFormControlNodeingredients: function() {
    return ReactDOM.findDOMNode(this.refs.ingredients);
  },
  handleClick: function(){
    const title = this.getFormControlNodeTitle().value;
    const ingredients = this.getFormControlNodeingredients().value.split(",");
    this.props.updateRecipeBook(title,ingredients);
    this.setState({ showModal: false });
  }
});


const ModalButtonEdit = React.createClass({


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
          onClick={this.open}
        >
          Edit Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FormGroup>
              <ReactBootstrap.ControlLabel>Recipe</ReactBootstrap.ControlLabel>
              <FormControl type="text" defaultValue={this.props.title} ref="title"/>
            </FormGroup>


            <FormGroup>
              <ReactBootstrap.ControlLabel>Ingredients</ReactBootstrap.ControlLabel>
              <FormControl componentClass="textarea" defaultValue={this.props.ingredients} ref="ingredients"/>
            </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={() => {this.handleClick()} }>Edit Recipe</Button>
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
  getFormControlNodeingredients: function() {
    return ReactDOM.findDOMNode(this.refs.ingredients);
  },
  handleClick: function(){
    const title = this.getFormControlNodeTitle().value;
    const ingredients = this.getFormControlNodeingredients().value.split(",");
    this.props.editSingleIngreedient(title,ingredients);
    this.setState({ showModal: false });
  }
});

class Dropdown extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }



  render() {
    return (
      <div>

        <Button bsStyle="link" onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.title}
        </Button>

        <Collapse in={this.state.open}>
          <div>

            <Well>
              <h2 className="text-center">Ingredients</h2>

                <Table striped bordered condensed hover>
                  <tbody>

                    {this.props.ingredients.map((ingredient) =>
                      <tr>{ingredient}</tr>
                    )}

                  </tbody>
                </Table>

              <Button  bsStyle="danger" onClick={() => {this.props.deleteIngredient(this.props.title)} }>Delete</Button>
              <ModalButtonEdit title={this.props.title} ingredients={this.props.ingredients} editSingleIngreedient={this.props.editSingleIngreedient}/>

            </Well>

          </div>
        </Collapse>
      </div>
    );
  }
}



ReactDOM.render(
  <Box />,
  document.getElementById('root')
);
