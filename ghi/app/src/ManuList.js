import React from 'react'

class ManuList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {manufacturers: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8100/api/manufacturers/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ manufacturers: data.manufacturers })
        }
      }  

    render () {
        return (
            <>
            <h1>Manufacturers</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.manufacturers.map(manu => {
                  return (
                    <tr key={manu.id}>
                      <td>{ manu.name }</td>                 
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </>
        )        
    }
}

export default ManuList