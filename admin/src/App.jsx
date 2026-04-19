import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>StyleStore - Admin Dashboard</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function Dashboard() {
  return <div>Admin Dashboard</div>;
}

export default App;
