
// needs to import  https://github.com/chjj/marked

class MarkDown extends React.Component {

	constructor(props) {
        super(props);
        this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'};

				this.handleChange = this.handleChange.bind(this);
      }


	handleChange(event) {
    this.setState({value: event.target.value});
  }

	createMarkup(text) {
		// sanitizing the text to prevent XSS
		let returnText = marked(text,{sanitize: true});
		return {__html: returnText};
	}

  render() {
    return (

				<div className="container">

					<div className="row">
						<div className="col-md-6">
						<textarea className="textarea" value={this.state.value} onChange={this.handleChange} />
						</div>

						<div className="col-md-6">
						<div dangerouslySetInnerHTML={this.createMarkup(this.state.value)} />
						</div>
					</div>
				</div>

    )
  }
}


ReactDOM.render(
  <MarkDown />,
  document.getElementById('root')
);
