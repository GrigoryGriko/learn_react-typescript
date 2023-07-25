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
          {/* @ts-ignore */}
          <Route path={'/users'} element={<UsersPage/>} exact={true}/>
          {/* @ts-ignore */}
          <Route path={'/todos'} element={<TodosPage/>} exact={true}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;