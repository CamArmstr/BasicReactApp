import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Repeat Activity</th>
                <th>Relevant Link</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.choreData.map((row,index) => {
    return (
        <tr key={index}>
            <td>{row.activity}</td>
            <td>{row.link}</td>
            <td>
                <button onClick={() => props.removeChore(index)}>Delete</button>
            </td>
        </tr>
    )        
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {choreData, removeChore} = this.props

        return (
        <table>
            <TableHeader />
            <TableBody choreData = {choreData} removeChore = {removeChore} />
        </table>
        )
    }
}



export default Table