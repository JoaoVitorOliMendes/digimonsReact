import React from "react";
import Digimon from "../Digimon/Digimon";

export default class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            digimons: [],
            digimonsOriginal: []
        }
    }

    componentDidMount() {
        this.fetch()
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    setDigimons() {
        const { digimonUpdated } = this.props
        digimonUpdated(this.state.digimons)

        this.getAllDigimons()
    }

    getAllDigimons() {
        const { digimons } = this.props
        this.setState({
            digimons: digimons,
            digimonsOriginal: digimons
        })
    }

    fetch() {
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(res => res.json())
        .then(res => {
            this.setDigimons(res)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { digimons } = this.state
        return (
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pesquisar" onChange={(e) => this.fetch()} />
                        <span className="input-group-text">
                            <img src="https://th.bing.com/th/id/OIP.7k-DX9wxLnkARV9DaLPlYQHaHZ?pid=ImgDet&rs=1" width="50" height="50" />
                        </span>
                    </div>
                </div>
                {
                    digimons.map((val, index) => {
                        return <Digimon digimon={val} key={index} />
                    })
                }
            </div>
        )
    }
}