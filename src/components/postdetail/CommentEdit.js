import React, { Component } from 'react';

class CommentEdit extends Component {

  onEdit = () => {
    if(this.props.editId) {
      this.props.onEdit(null, this.props.editId)
    } else {
      this.props.onEdit(this.props.id, null)
    }
  }

  render() {
    let buttonValue
    if (this.props.editId === this.props.id) {
      buttonValue = this.props.editId ? 'Save' : 'Edit'
    } else {
      buttonValue = 'Edit'
    }
    
    return(
      <div className="comment-edit">
        <input 
          onClick={this.onEdit}
          type="submit" 
          value={buttonValue} />
      </div>
    )
  }
}

export default CommentEdit;