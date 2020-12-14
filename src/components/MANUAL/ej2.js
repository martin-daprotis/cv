import React from 'react'

class Ej2 extends React.Component {
  state = {search: ''}

  handleChange = (e) => {
    // const text = e.target.value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: e.target.value
      })
    },1000)
  }
  

  render() {

    return (
      <div  style={{margin:'100px'}}>
       <input type='text' onChange={this.handleChange}/>
       <p>Search for:{this.state.search ? this.state.search:''}</p>
      </div>
    )
  }
}
export default Ej2;

/* In this case, when you write something inside the input it throws an error saying that event.target is null,
that's because the event object was nullified after the event callback was finished.
 In order to get around this error it is possible to assign the event.target.value to a variable inside the handleChange function and outside the setTimeout Callback function. In order to use this variable inside the callback function of the setTimeout 
 instead of using directly the event.target.value. Another way to solve this problem is by using the persist() method, 
using event.persist() inside the handleChange function will make the event persistent.
*/ 

