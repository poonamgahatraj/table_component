import Table from "./component/table";
function App() {

  const data = [
    { id: 1, name: 'Suraj', age: 20 },
    { id: 2, name: 'poonam', age: 25 },
    { id: 3, name: 'vishu', age: 18 },
    { id: 4, name: 'laxmi', age: 30 }
  ];
  return (
   <>
   <Table data={data}/>
   </>
  );
}

export default App;
