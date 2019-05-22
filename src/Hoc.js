import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Movie from './Movie';

// return class Hoc extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { isLoding: true }
//     }
//     componentDidMount() {
//         setTimeout(() => 
//             this.setState({ isLoading: false })

//         , 8000);
//     }

//     render() {
//       return(

//       )


//    }
// }
function Hoc(Movie) {
    return function WihLoadingComponent({ isLoading }) {
        // if (isLoading) return (<Movie />);
        // return (<CircularProgress disableShrink />);
        return isLoading?<Movie/>:<CircularProgress disableShrink />
    }
}
export default Hoc;








