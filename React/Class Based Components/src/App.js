import Counter from "./components/counter/counter";

function App() {
  const receiveDataFromChild = (data) => {
    console.log('I am the App.js component', data)
  }
  return (
    <div className="App">
      <Counter name={'Sourav'} receiveDataFromChild={receiveDataFromChild}/>
    </div>
  );
}

export default App;
