import React from 'react'
import StarCoponent from './StarCoponent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
var styles = {
  marginTop: 70,
  marginLeft: 70
};
class MovieSpace extends React.Component {
  constructor(props) {
    super(props)
   

  }
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  createNew = () => {   
      this.props.new()
      this.setState({ open: false });
     }
  
  render() {
    return (
      <div className="movie-space">
        {
          this.props.table.map((el, i) => <div key={i} className="film">
            <StarCoponent count={el.rate} />
            <img src={el.pic} className="pictures" />
            <h3>{el.title}</h3>
          </div>
          )
        }
        {/* <AddMovie /> */}

        <div className="film add">
          <Button variant="fab" color="primary" aria-label="Add" id="x" style={styles} onClick={this.handleClickOpen}>
            <AddIcon />
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add a movie</DialogTitle>
            <DialogContent>
          
              <TextField
                autoFocus
                margin="dense"
                name="rate"
                label="Rating"
                type="Number"
                fullWidth
                onChange={this.props.change}

              />
              <TextField
                autoFocus
                margin="dense"
                name="pic"
                label="picture"
                type="placeholder"
                fullWidth
                onChange={this.props.change}
              />
               <TextField
                autoFocus
                margin="dense"
                name="title"
                label="title"
                type="placeholder"
                fullWidth
                onChange={this.props.change}
              /> 
              
              
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
          </Button>
              <Button color="primary" onClick={this.createNew}>
                Confirm
          </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }
}
export default MovieSpace