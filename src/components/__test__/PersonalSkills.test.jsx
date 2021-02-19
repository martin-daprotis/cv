import React from 'react'
import { render, fireEvent, cleanup, waitFor, getByTestId ,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
} from "react-switch-lang";
import PersonalSkills from '../PersonalSkills';


const mockSkillEN = {
  "personal_skills" :[
    {
      "skill":"Skill",
      "description":"Skill Description"
    },
  ]  
};
const mockSkillSP = {
  "personal_skills" :[
    {
      "skill":"Habilidad",
      "description":"Descripcion de la habilidad"
    },
  ]  
};

afterEach(cleanup)

describe('Spanish language specifying mocks', () => {
  it('render properly ',  () => {
    const RenderHOC = translate(({t}) => <PersonalSkills sp={mockSkillSP} en={mockSkillEN} t={t} language='SP'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Habilidad")).toBeInTheDocument();
    expect(getByText(/descripcion de la habilidad/i)).toBeInTheDocument();
  })
})

describe('English language specifying mocks', () => {
  it('render properly ',  () => {
    const RenderHOC = translate(({t}) => <PersonalSkills sp={mockSkillSP} en={mockSkillEN} t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Skill")).toBeInTheDocument();
    expect(getByText(/skill description/i)).toBeInTheDocument();
  })
})

describe('Spanish language default languages', () => {
  it('render properly ',  () => {
    const RenderHOC = translate(({t}) => <PersonalSkills t={t} language='SP'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Adaptabilidad")).toBeInTheDocument();
    expect(getByText(/sumamente necesaria/i)).toBeInTheDocument();
  })
})

describe('English language default languages', () => {
  it('render properly ',  () => {
    const RenderHOC = translate(({t}) => <PersonalSkills t={t} language='EN'/>);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText("Adaptability")).toBeInTheDocument();
    expect(getByText(/is mandatory/i)).toBeInTheDocument();
  })
})

it('matches snapshot',  () => {
  const RenderHOC = translate(({t}) => <PersonalSkills t={t} language='EN'/>);
const wrapper = render(<RenderHOC/>)
expect(wrapper.asFragment()).toMatchSnapshot()
})