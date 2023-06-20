import React, { useState } from 'react';


const AutoForm = () => {
const [color, setColor] = useState('')
const [year, setYear] = useState('')
const [vin, setVin] = useState('')
const [models, setModels] = useState([])
const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {color, year, vin, models}
    delete data.models
    data.model_id = data.models
    delete data.models
}

}
class AutoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            color: '',
            year: '',
            vin: '',
            models: [],
        }
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleVINChange = this.handleVINChange.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.models
        data.model_id = data.model
        delete data.model
        console.log(data);

        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(autoUrl, fetchConfig);
        if (response.ok) {
          const newAuto = await response.json();
          console.log(newAuto);

          const cleared = {
            color: '',
            year: '',
            vin: '',
            model: '',
          };
          this.setState(cleared);
        }
    }
    
    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year: value})
    }

    handleVINChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({model: value})
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
    
        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();

          this.setState({models: data.models});

        }
      }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add an automobile to inventory</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleYearChange} value={this.state.year} placeholder="Year" required type="text" name="year" id="year" className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVINChange} value={this.state.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleModelChange} value={this.state.model} required name="model" id="model" className="form-select">
                            <option value="">Choose a model</option>
                            {this.state.models.map(model => {
                                return (
                                    <option key={model.id} value={model.id}>
                                    {model.manufacturer.name} / {model.name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>                        
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoForm;