import React from 'react'
import { render, fireEvent, cleanup,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";
import Circular from '../Circular';


const mockSkills = [
      { "title": "ps_uno", "icon": "", "value": 80 },
      { "title": "ps_dos", "icon": "", "value": 100 },
    ];

afterEach(cleanup)

it('render every item with 0% ', () => {
  const RenderHOC = translate(({t}) => <Circular  elems={mockSkills} t={t} startAnimation='false'/>);
  const {getAllByText,getByText} = render(<RenderHOC/>)
  expect(getByText('work_translation.ps_uno')).toBeInTheDocument();
  expect(getByText('work_translation.ps_dos')).toBeInTheDocument();
  expect(getAllByText('0%').length).toEqual(2);
})

it('should render correct percentage ', async () => {
  const RenderHOC = translate(({t}) => <Circular  elems={mockSkills} t={t} startAnimation='true'/>);
  const {getByText,findByText} = render(<RenderHOC/>)
  expect(getByText('work_translation.ps_uno')).toBeInTheDocument();
  expect(getByText('work_translation.ps_dos')).toBeInTheDocument();
  jest.setTimeout(10000);
  expect(await findByText('80%')).toBeInTheDocument();
  expect(await findByText('100%')).toBeInTheDocument();
})