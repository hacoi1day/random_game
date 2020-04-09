class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header jumbotron text-center">
                <h2>Guessing rando number</h2>
                <p>Tôi đã chọn 1 số random trong khoảng 1 đến 100, bạn có thể đoán được ?</p>
            </div>
        );
    }
}

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfGessing: 0,
            inputValue: 0,
            randomNumber: this.randomNumber(),
            message: 'Hello everyone',
        }
    }

    /**
     * New Game
     */
    newGame = () => {
        this.setState({
            numberOfGessing: 0,
            inputValue: 0,
            randomNumber: this.randomNumber(),
            message: 'Hello everyone',
        });
    }

    /**
     * Create random number between 0 and 100
     */
    randomNumber = () => {
        return Math.floor((Math.random())*100 + 1);
    }

    /**
     * Function event of input change & set state
     */
    onChange = (event) => {
        // get name: event.target.name
        // get value: event.target.value
        if (!event.target.value) {
            this.setState({
                inputValue: 0
            });
        } else {
            this.setState({
                inputValue: parseInt(event.target.value)
            });
        }
    }

    /**
     * Gessing
     */
    onGessing = () => {
        const {inputValue, randomNumber, numberOfGessing} = this.state;
        if (!inputValue) {
            return false;
        }
        this.setState({
            numberOfGessing: numberOfGessing + 1,
        });
        if (inputValue < randomNumber) {
            this.setState({
                message: "Số bạn đoán quá nhỏ",
            });
        } else if (inputValue > randomNumber) {
            this.setState({
                message: "Số bạn đoán quá lớn",
            });
        } else if (inputValue == randomNumber) {
            this.setState({
                message: "You win with score: " + (this.state.numberOfGessing + 1),
            });
            alert("You win with score: " + (this.state.numberOfGessing + 1));
        }
    }

    render() {
        return (
            <div className="body">
                <button onClick={this.newGame}>New game</button>
                <br />
                <p>Số lần bạn đã đoán là: {this.state.numberOfGessing}</p>
                <p>Số bạn đoán là: {this.state.inputValue || ''}</p>
                <input onChange={this.onChange} value={this.state.inputValue} type="number" max={100} min={0} name="number" id="number" />
                <button onClick={this.onGessing} className="btn-green">Đoán</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

ReactDOM.render(<App name="root"/>, document.getElementById("root"));
