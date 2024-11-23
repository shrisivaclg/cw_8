// import Counter from './Counter';

// function App() {
//     return (
//         <div className="App">
//             <HelloWorld name="Your Name" />
//             <Counter />
//         </div>
//     );
// }

// export default App;
import FilteredList from './FilteredList';
import Counter from './Counter';
import HelloWorld from './HelloWorld';
import './App.css';

    const produce = [
        {name: "Apple", type: "Fruit"},
{name: "Pineapple", type: "Fruit"} ,
{name: "Banana", type: "Fruit"},
{name: "Pear", type: "Fruit"},
{name: "Strawberry", type: "Fruit"},
{name: "Orange", type: "Fruit"},
{name: "Lettuce", type: "Vegetable"},
{name: "Cucumber", type: "Vegetable"},
{name: "Eggplant", type: "Vegetable"},
{name: "Squash", type: "Vegetable"},
{name: "Bell pepper", type: "Vegetable"},
{name: "Onion", type: "Vegetable"},
];
    

function App() {
    return (
        <div className="App">
            <div className="App">
             <HelloWorld name="Ramya Sree Narra" />
             <Counter />
            </div>
            <FilteredList items={produce} />
        </div>
    );
}

export default App;


