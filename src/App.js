// import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import './Timer.css'
import ZenQuotes from './ZenQuotes';
// import GithubUserInfo from './GithubUserInfo'

function App() {
 
  return (
    <div className="App">
      <Timer/>
      <ZenQuotes  />
      {/* <GithubUserInfo username={'facebook'} />
      <GithubUserInfo username={'colt'} />
      <GithubUserInfo username={'manosakpujiha'} /> */}

    </div>
  );
}

export default App;
