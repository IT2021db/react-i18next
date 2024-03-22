import logo from './logo.svg';
import './App.css';
// import {  Trans } from 'react-i18next';

function App() {
  // const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           {/* Użyj tłumaczenia z klucza 'description.part1' */}
          {/* <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>        */}
           </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           {/* Użyj tłumaczenia z klucza 'description.part2' */}
          {/* {t('description.part2')} */}
        </a>
      </header>
    </div>
  );
}

export default App;
