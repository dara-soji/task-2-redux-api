import { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setNationalStat, setStateStat } from './redux/actions/covidStat';
import NationalStat from './components/NationalStat';
import StateStat from './components/StateStat';

function App() {
  const stats = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchStats = async () => {
    const response = await axios
      .get("https://covidnigeria.herokuapp.com/api")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setStateStat(response.data.data.states));
  };
  const fetchNationalStats = async () => {
    const response = await axios
      .get("https://covidnigeria.herokuapp.com/api")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setNationalStat(response.data.data));
  };

  useEffect(() => {
    fetchStats();
    fetchNationalStats();
  }, []);
  return (
    <div className="App">
      <div className="ui sticky menu">
        <div className="ui container center">
          <h2>Nigerian Covid-19 Statistics</h2>
        </div>
      </div>

    <>
      <NationalStat />
    </>

    <div className="ui horizontal divider">
    Statistics by state
  </div>

  <>
    <StateStat />
  </>
    </div>
  );
}

export default App;
