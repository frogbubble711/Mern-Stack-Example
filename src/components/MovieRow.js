import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.state = {
            title: '',
            Vote_Mark: '',
            Image:''
        }
        console.log(this.props.obj.title);
        this.setState({
            title: this.props.obj.title,
            Vote_Mark: this.props.obj.vote_average,
            Image: this.props.obj.image
        })

    }
    add(){
        const obj = {
            title: this.props.obj.title,
            Vote_Mark: this.props.obj.vote_average,
            Image: this.props.obj.image
        };
        console.log(obj);
        axios.post('http://localhost:4000/movies/add', obj)
            .then(res => console.log(res.data));

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
                    {this.props.obj.vote_average}
                </td>
                <td>
                    {this.props.obj.image}
                </td>
                <td>
                    <button onClick={this.add} className="btn btn-danger">ADD</button>
                </td>
            </tr>
        );
    }
}

export default MovieRow;
