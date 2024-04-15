// Контекст документация = https://ru.legacy.reactjs.org/docs/context.html

// src/App.jsx
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN
  constructor(props) {
    super(props);
    this.state = { theme: themes[0] };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme, setTheme: this.setTheme, themes }}>
        <Tabs className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Profile />
          </Tab>
        </Tabs>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
  }
}
  // END
// // src/Home.jsx
// const content = 'Текст для вкладки Home';

class Home extends React.Component {
//   // BEGIN
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
}
//   // END
// // src/Profile.jsx
// const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
//   // BEGIN
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    const { theme } = context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
}
//   // END
// // src/ThemeSwitcher.jsx
import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
//   // BEGIN
  static contextType = ThemeContext;

  render() {
    const { themes, setTheme, theme } = this.context;
    return (
      <ButtonGroup className="mt-2">
        {themes.map((curTheme) => (
          <ToggleButton
            key={curTheme.id}
            id={`radio-${curTheme.id}`}
            type="radio"
            name="radio"
            value={curTheme.name}
            checked={curTheme.name === theme.name}
            onChange={() => setTheme(curTheme)}
          >
            {curTheme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
}
//   // END