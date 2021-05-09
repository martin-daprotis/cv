import React from 'react'
import { render, fireEvent, cleanup, waitFor, getByTestId ,logDOM} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {
  translate,
  setTranslations,setDefaultLanguage
} from "react-switch-lang";
import NavBar from '../NavBar';


const mockEN = {
  "navbar": {
    "profile": "Profile",
    "personal_skills": "Personal Skills",
    "knowledge": "Knowledge",
    "work": "Work Experience"
  }
};
const mockSP = {
  "navbar": {
    "profile": "Perfil",
    "personal_skills": "Habilidades",
    "knowledge": "Conocimientos",
    "work": "Experiencia Laboral"
  }
};

afterEach(cleanup)

const toggleTheme = jest.fn();
const handleClickLang = jest.fn();
const handleClickTab = jest.fn();

describe('Spanish language specifying mocks', () => {
  it('render properly ',  () => {
    setTranslations({ mockEN, mockSP });
    setDefaultLanguage("mockSP");
    const RenderHOC = translate(({t}) => <NavBar
                                              onThemeTypeSwitch={toggleTheme}
                                              handleClickLang={handleClickLang}
                                              t={t}
                                              handleClickTab={handleClickTab}
                                              tabValue={0}
                                            />);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText(/perfil/i)).toBeInTheDocument();
    expect(getByText(/habilidades/i)).toBeInTheDocument();
    expect(getByText(/conocimientos/i)).toBeInTheDocument();
    expect(getByText(/experiencia laboral/i)).toBeInTheDocument();
  })
})

describe('English language specifying mocks', () => {
  it('render properly ',  () => {
    setTranslations({ mockEN, mockSP });
    setDefaultLanguage("mockEN");
    const RenderHOC = translate(({t}) => <NavBar
                                              onThemeTypeSwitch={toggleTheme}
                                              handleClickLang={handleClickLang}
                                              t={t}
                                              handleClickTab={handleClickTab}
                                              tabValue={0}
                                            />);
    const {getByText} = render(<RenderHOC/>)
    expect(getByText(/profile/i)).toBeInTheDocument();
    expect(getByText(/personal skills/i)).toBeInTheDocument();
    expect(getByText(/knowledge/i)).toBeInTheDocument();
    expect(getByText(/work experience/i)).toBeInTheDocument();
  })
})

describe('Action tests', () => {
  it('handles click properly ',  () => {
    const RenderHOC = translate(({t}) => <NavBar
                                                onThemeTypeSwitch={toggleTheme}
                                                handleClickLang={handleClickLang}
                                                t={t}
                                                handleClickTab={handleClickTab}
                                                tabValue={0}
                                              />);
  const {getByTestId} = render(<RenderHOC/>)
  fireEvent.click(getByTestId('btnLang'))
  expect(handleClickLang.mock.calls.length).toBe(1)
  fireEvent.click(getByTestId('btnTheme'))
  expect(toggleTheme.mock.calls.length).toBe(1)

  // logDOM()
  // fireEvent.scroll(window, { target: { scrollY: 1500 } })
  // expect((await findAllByText('80%')).length).toBeTruthy();
  })
})

it('matches snapshot',  () => {
  const RenderHOC = translate(({t}) => <NavBar
                                              onThemeTypeSwitch={toggleTheme}
                                              handleClickLang={handleClickLang}
                                              t={t}
                                              handleClickTab={handleClickTab}
                                              tabValue={0}
                                            />);
const wrapper = render(<RenderHOC/>)
expect(wrapper.asFragment()).toMatchSnapshot()
})

