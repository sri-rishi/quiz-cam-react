import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, QuestionPage, RulesPage } from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </div>
  );
}

export default App;
