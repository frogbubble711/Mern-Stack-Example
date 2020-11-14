import React, { Component } from 'react';
import axios from 'axios';
import MovieRow from './MovieRow';
import * as movieService from './../services/topMovie.service';

export default class Index extends Component {
    movie = [];

    constructor(props) {
        super(props);
        this.state = {movies: [], favourites: []};
    }


    componentDidMount(){
        movieService.getMovies(1).then(result => {
            result.results.map(item => {
                this.movie.push(item);
            });
            this.setState({ movies: this.movie });
        });
       axios.get('http://localhost:4000/movies')
            .then(response => {
                console.log(response);
                this.setState({ favourites: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        //return this.state.business.map(function(object, i){
         //   return <TableRow obj={object} key={i} />;
        //});
    }
    movieRow(){
       // return movieService.getMovies(1).then(result=> {
       //  console.log(result);
        //    return <div>samir</div>

       // });
        console.log(this.movie);
        return this.movie.map((object, i) => {
            console.log(object);
            return <MovieRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Movies list</h3>
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
