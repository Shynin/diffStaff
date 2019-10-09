
function Button(props) {
    return (
        <button
            // className = "btn"
            className = {props.but.class}
            // style={props.but.style}
            onClick={props.onClick}
            >{props.but.label}</button>
    )
}


class App extends React.Component {
    state = {
        buts: [
            {class: "btn", label: "Primary"},
            {class: "btn second", label: "Secondary"},
            {class: "btn danger",  label: "Danger"},
            {class: "btn grey",  label: "Grey style"},
            {class: "btn link",  label: "Link"}
        ],
        // visible: true,
    }

    handleClick(label) {
        console.log(`It was a click on ${label}`)
    }

    renderButtons() {
        return this.state.buts.map(but => {
            return (
                <Button
                    but = {but}
                    key = {but.label + Math.random()}
                    onClick = {this.handleClick.bind(this, but.label )}
                />
            )
        })
    }

    render() {
        return(
            <div className="app">
                {this.renderButtons() }
            </div>
        )
    }
}


ReactDOM.render(<App /> , document.getElementById('root'))