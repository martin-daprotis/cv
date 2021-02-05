import React from 'react'
import { render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";

import Work from '../Work'

const mockWorkEN = {
  "work": [
  {
    "from": "2020-09",
    "until": "2020-10",
    "place": "Work Place",
    "position": "Sr Front-End Developer",
    "description": "Work Description",
    "status": 1
  }]};
const mockWorkSP = {
    "work": [
    {
      "from": "2020-09",
      "until": "2020-10",
      "place": "Lugar de Trabajo",
      "position": "Desarrollador Front End Sr",
      "description": "Descripción Laboral",
      "status": 1
    }]};

afterEach(cleanup)

describe('Spanish language', () => {
  it('render period ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('2020-09 - 2020-10')).toBeInTheDocument();
  })
  
  it('render work place ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='SP'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Lugar de Trabajo')).toBeInTheDocument();
  })

  it('render position ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='SP'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Desarrollador Front End Sr')).toBeInTheDocument();
  })

  it('render description ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='SP'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Descripción Laboral')).toBeInTheDocument();
  })
})

describe('English language', () => {
  it('render period ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('2020-09 - 2020-10')).toBeInTheDocument();
  })

  it('render work place ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Work Place')).toBeInTheDocument();
  })

  it('render position ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Sr Front-End Developer')).toBeInTheDocument();
  })

  it('render description ', () => {
    const RenderHOC = translate(({t}) => <Work sp={mockWorkSP} en={mockWorkEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('Work Description')).toBeInTheDocument();
  })
})