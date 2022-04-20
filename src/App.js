import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
    state = {
        chores: [],
    //     chores: [{
    //         activity: 'Get Razors',
    //         link: 'https://www.amazon.com/gp/product/B07CGMTVM4/',
    //     },
    //     {
    //         activity: 'Get Protein',
    //         link: 'https://www.amazon.com/gp/product/B000QSNYGI/',
    //     },
    //     {activity: 'Get Vitamins',
    //         link: 'https://www.amazon.com/Animal-Pak-Multivitamin-Antioxidants-Bodybuilders/dp/B000GOT54C/',
    //     },
    // ],
    }

    removeChore = (index) => {
        const {chores} = this.state

        this.setState({
            chores: chores.filter((chore, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (chore) => {
        this.setState({chores:[...this.state.chores, chore]})
    }
    
    render() {
        const {chores} = this.state

        return (
            <div className="container">
                <Table choreData={chores} removeChore={this.removeChore} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App