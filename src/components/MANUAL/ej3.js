// import React from 'react'

// class Ej3 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       name: this.props.name||'Anonymus'
//     }
//   }

//   render() {

//     return (
//       <p>Hello {this.state.name}</p>
//     )
//   }
// }

// export default Ej3;

import React from 'react'

class Ej3 extends React.Component {

  render() {

    return (
      <p>Hello {this.props.name || 'Anonymus'}</p>
    )
  }
}

export default Ej3;

/* In the third example, if the component will have only this functionality and it is not a WIP, there is no need to maintain a state just for the name property
As I understand the intention of this component is just to display the name that was passed through props to this component and in case that
this prop is not passed through, it will prompt just Hello Anonymus where Anonymus is a default value. 
But because the property is used just once when the component is render and it will not change internally there is no need to have a state for this.
So in my opinion this component can be reduced to a simpler form just printing {this.props.name || 'Anonymus'} inside the <p> tag

*/
