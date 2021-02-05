import React from 'react'
import { render, fireEvent, cleanup,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";
import Knowledge from '../Knowledge';
import { StylesProvider } from '@material-ui/styles/';


const mockSkills = [
      { "title": "JavaScript", "icon": "devicon-javascript-plain", "value": 80 },
      { "title": "React", "icon": "cib-react", "value": 100 },
    ];

afterEach(cleanup)

it('changes on scroll', async () =>{
  const RenderHOC = translate(({t}) => <Knowledge  t={t}/>);
  const {findAllByText,getAllByText} = render(<RenderHOC/>)

  fireEvent.scroll(window, { target: { scrollY: 1500 } })
  expect((await findAllByText('80%')).length).toBeTruthy();

  fireEvent.scroll(window, { target: { scrollY: 0 } })
  expect(getAllByText('0%').length).toBeTruthy();


})

it('render correctly ', () => {
  const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`
  
  const RenderHOC = translate(({t}) => <Knowledge  t={t}/>);
  const wrapper = render(
    <StylesProvider generateClassName={generateClassName}>
      <RenderHOC/>
    </StylesProvider>)
  expect(wrapper.asFragment()).toMatchSnapshot()
})

