import './App.css';
import Test from './component/test'
import Test2 from './component/Test2'
import { useState } from 'react';
import App1 from 'react';

function App() {
  const [isUser, setIsUser] = useState(false);
  return (
    <div className='App'>
      <p>Conditional Rendering</p>
      <App1/>
      <button onClick={() => setIsUser(!isUser)}><h5>click to LogIn/LogOut</h5></button>
      {/* conditional rendering */}
      {isUser ? <Test /> : <Test2 />}
      {/* short circuit approach */}
      {isUser && <h4>This site is under development</h4>}
    </div>
  );
}
export default App;
