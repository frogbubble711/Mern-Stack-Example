import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as movieService from './../services/topMovie.service';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);

    }
    delete() {
        axios.get('http://localhost:4000/movies/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }
    componentDidMount() {
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.Vote_Mark}
                </td>
                <td>
                    {this.props.obj.Image}
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
