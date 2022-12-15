import './App.css';
import logo from './shop-logo.png';
import Product from './components/Product';
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />

      </header>
      <body>
      < Product />
        {/* < product name="Rainbow" description="This is a paint of Rainbow" imageUrl="https://images.unsplash.com/photo-1545231097-cbd796f1d95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80"/>
        < product name="Smoke" description="This is a art work of smoke" />
        < product name="Rainbow" description="This is a paint of Rainbow" /> */}
      </body>
    </div>
  );
}

export default App;
