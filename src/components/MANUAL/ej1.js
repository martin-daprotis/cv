import React from 'react'

class Ej1 extends React.Component {
  constructor(){
    super();
    this.name = 'MyComponent';
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log('click1')
    alert(this.name);
  }

  handleClick3 = () => {
    console.log('click3')
    alert(this.name);
  }

  render() {

    return (
      <div>
        <button onClick = {this.handleClick1()}>Click1</button>
        <button onClick = {this.handleClick1}>Click2</button>
        <button onClick = {this.handleClick2}>Click3</button>
        <button onClick = {this.handleClick3}>Click4</button>
      </div>
    )
  }
}
export default Ej1;

/*

I am positive that if I could apply my knowledge in a company that takes care of people's health, 
this would bring more satisfaction to me than working for any other company where one cannot see a 
positive impact in other people's lives. 
And Manual is a company that through it's team is focusing on the wellbeing of men that are trying 
to solve their issues. 
I think that with my more than 6 years of experience I would be able to contribute to enhancing 
Manual site to reach out to more men that are in need
of the help that this company can offer, and begin to bring solutions to their problems.

I will be mentioning each button by their label:

In the case of the FIRST button this will execute the alert on render because the handleClick1 function is called
inside the onClick prop and assuming that this is not the intended functionality it would be better to assign
handleClick2 instead

The SECOND button has handleClick1 inside the onClick prop and it will throw an error because the 'this' was not bound,
so it is not able to access it, this can be solved by making different things but the recommended solution is to create
handleClick1 as an arrow function if you still want to use handleClick1 instead of handleClick2

The THIRD button will run handleClick2 without any error because it binds the 'this' in the constructor to
the function handleClick1, so it will bind it on the first render. This is the best solution for class components

The FOURTH button, is just an arrow function so it will auto bind the 'this' to the function


*/