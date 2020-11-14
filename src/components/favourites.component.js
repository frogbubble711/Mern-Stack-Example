import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Favourites extends Component {
    movie = [];

    constructor(props) {
        super(props);
        this.state = {favourites: []};
    }


    componentDidMount(){
        axios.get('http://localhost:4000/movies')
            .then(response => {
                this.setState({ favourites: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    movieRow(){
        return this.state.favourites.map((object, i) => {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">My favourite movies</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Vote Mark</th>
                        <th>Image</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.movieRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}
