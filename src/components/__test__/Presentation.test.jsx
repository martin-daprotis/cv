import React from 'react'
import { render, fireEvent, cleanup, waitFor, getByTestId ,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
  setTranslations,setDefaultLanguage
} from "react-switch-lang";
import Presentation from '../Presentation';


const mockEN = {
  "personal_data": {
    "name": "Martín EN",
    "surname": "Daprotis EN",
    "dni": 32838127,
    "bdate": "16 Feb. 1987",
    "bday": "Fecha de Nacimiento",
    "country": "Argentine",
    "city": "Bahía Blanca",
    "contact": {
      "phone": "299-4568950",
      "email": "mdaprotisEN@hotmail.com"
    }
  },
  "summary":"Summary",
  "profile": "PROFILE TEST TEXT"
};
const mockSP = {
    "personal_data": {
      "name": "Martín SP",
      "surname": "Daprotis SP",
      "dni": 32838127,
      "bdate": "16 Feb. 1987",
      "bday": "Fecha de Nacimiento",
      "country": "Argentina",
      "city": "Bahía Blanca",
      "contact": {
        "phone": "299-4568950",
        "email": "mdaprotisSP@hotmail.com"
      }
    },
    "summary":"Presentación",
    "profile": "TEXTO DE PRUEBA DEL PROFILE"
};

afterEach(cleanup)

describe('Spanish language specifying mocks', () => {
  it('render properly ',  () => {
    setTranslations({ mockEN, mockSP });
    setDefaultLanguage("mockSP");
    const RenderHOC = translate(({t}) => <Presentation t={t}/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Presentación")).toBeInTheDocument();
    expect(getByText(/TEXTO DE PRUEBA DEL PROFILE/i)).toBeInTheDocument();
    expect(getByText(/mdaprotisSP@hotmail.com/i)).toBeInTheDocument();
    expect(getByText("Bahía Blanca - ( Argentina )")).toBeInTheDocument();
  })
})

describe('English language specifying mocks', () => {
  it('render properly ',  () => {
    setTranslations({ mockEN, mockSP });
    setDefaultLanguage("mockEN");
    const RenderHOC = translate(({t}) => <Presentation sp={mockSP} en={mockEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Summary")).toBeInTheDocument();
    expect(getByText(/PROFILE TEST TEXT/i)).toBeInTheDocument();
    expect(getByText(/mdaprotisEN@hotmail.com/i)).toBeInTheDocument();
    expect(getByText("Bahía Blanca - ( Argentine )")).toBeInTheDocument();
  })
})

it('matches snapshot',  () => {
  const RenderHOC = translate(({t}) => <Presentation sp={mockSP} en={mockEN} t={t} language='EN'/>);
const wrapper = render(<RenderHOC/>)
expect(wrapper.asFragment()).toMatchSnapshot()
})
