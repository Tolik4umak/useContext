
import MyContext from '../MyContext/MyContext';
import Test from '../Test/Test';
import Test2 from '../Test2/Test2';

function App() {
  
  return (
    <MyContext>
      <div className="App">
        <Test/>
        <Test2/>
      </div>
    </MyContext>
  );
}

export default App;
