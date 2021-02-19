import React from 'react'
import { render, fireEvent, cleanup,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";
import FormRow from '../FormRow';


const mockSkills = [
      { "title": "JavaScript", "icon": "devicon-javascript-plain", "value": 80 },
      { "title": "React", "icon": "cib-react", "value": 100 },
    ];

afterEach(cleanup)

it('render every item ', () => {
  const RenderHOC = translate(({t}) => <FormRow  items={mockSkills} t={t} startAnimation='false'/>);
  const {getByText} = render(<RenderHOC/>)
  expect(getByText('JavaScript')).toBeInTheDocument();
  expect(getByText('React')).toBeInTheDocument();
})

it('should render percentage ', () => {
  const RenderHOC = translate(({t}) => <FormRow  items={mockSkills} t={t} startAnimation='true'/>);
  const {getByText} = render(<RenderHOC/>)
  expect(getByText('100%')).toBeInTheDocument();
})

it('matches snapshot',  () => {
  const RenderHOC = translate(({t}) =><FormRow  items={mockSkills} t={t} startAnimation='true'/>);
  const wrapper = render(<RenderHOC/>)
  expect(wrapper.asFragment()).toMatchSnapshot()
})