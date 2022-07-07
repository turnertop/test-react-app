// think of ui as a bunch of components, break it down and that's why react is the goat
import Header from './components/Header'

function App() {
  const name = 'Nathan'
  const x = true

  return (
    <div className="container">
      <Header />
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2> {/*can link to a variable using {} for JSX */}
      <h3>{9+10}</h3> {/*can calculate numbers inside {} for JSX */}
      <h4>Hello {x ? 'Yes' : 'No'}</h4> {/* if x then show "Yes", else show "No" in JSX format - terniary operator*/}
    </div>
  );
}

export default App;
