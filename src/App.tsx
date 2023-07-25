import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample'
import TodosPage from './components/TodosPage';
import UsersPage from './components/UsersPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
          <NavLink to="/dragdrop">Драг/дроп</NavLink>
        </div>
        <Routes>
          {/* @ts-ignore */}
          <Route path={'/users'} element={<UsersPage/>} exact/>
          {/* @ts-ignore */}
          <Route path={'/todos'} element={<TodosPage/>} exact/>
          {/* @ts-ignore */}
          <Route path={'/dragdrop'} element={<EventsExample/>} exact/>
          <Route path={'/users/:id'} element={<UserItemPage/>}/>
          <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;