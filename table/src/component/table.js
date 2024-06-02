import './table.css'

export default function Table ({data}){
    return(
        <>
        <table style={{border:"1px solid black", width:"100vw"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
        </table>
        </>
    )
}