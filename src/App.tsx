import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample'
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;