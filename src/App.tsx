import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample'

const App = () => {
  return (
    <div>
      <EventsExample/>

      <Card
      onClick={() => console.log('нажатие произошло')}
        variant={CardVariant.outlined}
        width='200px'
        height='200px'
      >
        <button>Кнопка</button>
      </Card>

    </div>
  );
};

export default App;