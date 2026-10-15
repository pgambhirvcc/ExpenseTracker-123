import { useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import ExpenseCreator from './components/ExpenseCreator';
import ExpenseDisplayer from './components/ExpenseDisplayer';

function App() {

  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark': 'light';
    setTheme(currentTheme);
  }

  return (
    <ThemeContext.Provider value={theme}>

      <nav>
        <button onClick={handleTheme} className={theme === 'dark'? 'dark-theme-button': 'light-theme-button'}>
            Toggle Theme - {theme}
        </button>
      </nav>

      {/* Any component that is inside this provider will have access to data, shared by the Context */}
      <div className='expense-container'>
          <ExpenseCreator />
          <ExpenseDisplayer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
