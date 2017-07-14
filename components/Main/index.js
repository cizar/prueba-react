import React from 'react'


class Main extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.increment = this.increment.bind(this)
  // }
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  reset = () => {
    this.setState({
      counter: 0
    })
  }
  componentDidMount () {
    setInterval(this.increment, 100)
  }
  render () {
    return (
      <div>
        <h1>
          Counter: {this.state.counter}
        </h1>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.reset}>Resetear</button>
        {this.state.counter % 2 === 0 && "(Es par)"}
      </div>
    )
  }
}

export default Main
