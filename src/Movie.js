import React from 'react';
import equilizer from './equilizer.jpg';
import jonwick from './jonwick.jpg';
import scream from './scream.jpg';
import inception from './inception.jpg';
import SearchRate from './SearchRate';
import MovieSpace from './MovieSpace';


const table = [
    {
        // rate:"☆☆☆☆☆",
        rate: 3,
        pic: equilizer,
        title: "equilizer-2019",
    },
    {
        rate: 4,
        pic: jonwick,
        title: "john wick-2017",
    },
    {
        rate: 5,
        pic: scream,
        title: "scream-2015",
    },
    {
        rate: 2,
        pic: inception,
        title: "inception-2015",
    }
]
class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            pic: '',
            rate: 0,
            stars: '',
            movielist: table,
            searchText:''
        }
    }
    newMovie = () => {
        this.setState({
          movielist: [
             ...this.state.movielist,
          
            {
                rate: this.state.rate,
                pic: this.state.pic,
                title: this.state.title             
            }
        ]
        })
      }
      handlechange = ({target}) => {
        this.setState({
          [target.name]: target.value
        })
      }
      searchMovie = (e) => {
        this.setState({
          searchText: e.target.value
        })
      }
 
     rater = (clicked) => {
     this.setState({
           stars: clicked
       })
     }
    render() {
        return (
            < div className="Main">
                <div className="cadre">
                    <div className="search">
                        <div className="search-button-text">
                            <input type="text" placeholder="recherche" className="serch-text" onChange={this.searchMovie}/>
                        </div>
                        <div className="stars">
                            <label>Miminum rating</label>
                            <div className="rating">
                                {/* <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span> */}
                                <SearchRate rate={this.state.stars} starSelected={this.rater} />
                            </div>
                        </div>
                    </div>
                </div>
                <MovieSpace table={this.state.movielist.filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase())).filter(el=>el.rate>this.state.stars)} change={this.handlechange} new={this.newMovie} />
            </div>
        )
    }
}
export default Movie