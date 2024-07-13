import './App.css';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import TodosPage from './pages/TodoPage/TodosPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
