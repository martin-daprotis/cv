import React from 'react'
import { render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";

import WorkItem from '../WorkItem'
 
const mockWorkEN = {
    "from": "2020-09",
    "until": "2020-10",
    "place": "Work Place",
    "position": "Sr Front-End Developer",
    "description": "Work Description",
    "status": 1
  };
const mockWorkSP = {
      "from": "2020-09",
      "until": "2020-10",
      "place": "Lugar de Trabajo",
      "position": "Desarrollador Front End Sr",
      "description": "Descripción Laboral",
      "status": 1
    };

afterEach(cleanup)

describe('Spanish language', () => {
  it('render period ', () => {
    const RenderHOC = translate(({t}) => <WorkItem data={mockWorkSP} t={t}/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('2020-09 - 2020-10')).toBeInTheDocument();
    expect(getByText('Lugar de Trabajo -')).toBeInTheDocument();
    expect(getByText('Desarrollador Front End Sr')).toBeInTheDocument();
  })
})

describe('English language', () => {
  it('render period ', () => {
    const RenderHOC = translate(({t}) => <WorkItem data={mockWorkEN} t={t} />);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText('2020-09 - 2020-10')).toBeInTheDocument();
    expect(getByText('Work Place -')).toBeInTheDocument();
    expect(getByText('Sr Front-End Developer')).toBeInTheDocument();
    expect(getByText('Work Description')).toBeInTheDocument();
  })
})