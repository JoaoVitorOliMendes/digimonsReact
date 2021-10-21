import React from "react";

export default class Digimon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            digimon: this.props.digimon
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        const { digimon } = this.state
        if(digimon != this.props.digimon) {
            this.setState({
                digimon: this.props.digimon
            })
        }
    }

    componentWillUnmount() {
    }

    render() {
        const { digimon } = this.state
        return (
            <div className="col-4">
                <b>{digimon.name}</b>
                <br/>
                <b>{digimon.level}</b>
                <br/>
                <img src={digimon.img} />
            </div>
        )
    }
}