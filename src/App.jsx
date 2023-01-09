import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.conponent';

const App = () => {

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMosnters] = useState(monsters);

  //fetches need to be put in useEffect to avoid infinite fetch loop
  //useEffect takes two arguments: (callback, dependency array). Callback runs
  //when dependency values change. Empty array means it only gets called once: on mount.
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  //keeps filter from running unnecessarily;
  //useEffect only runs when dependencies change, so this is useful
  //to keep from doing unnecessary computations
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    setFilteredMosnters(newFilteredMonsters);
  }, [monsters, searchField]);

  const searchHandler = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={searchHandler}
        placeholder='Search Monsters...'
        className='search-box'/>

      <CardList
        monsters={filteredMonsters}/>

    </div>
  );
}







//Class component example below



// class App extends Component {

//   constructor() {

//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   searchHandler = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(() => {return {monsters: users}}));
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { searchHandler } = this;
//     const filteredMonsters = monsters.filter((monster) => {

//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (

//       <div className="App">

// {/* ----------------------------------------------------------------------------- */}
//         <h1 className='app-title'>Monsters Rolodex</h1>

// {/* ----------------------------------------------------------------------------- */}
//         <SearchBox
//           onChangeHandler={searchHandler}
//           placeholder='Search Monsters...'
//           className='search-box'
//         />
// {/* ----------------------------------------------------------------------------- */}

//         <CardList
//           monsters={filteredMonsters}
//         />
// {/* ----------------------------------------------------------------------------- */}

// {/* ----------------------------------------------------------------------------- */}


//       </div>
//     );
//   }
// }

export default App;
