import React from 'react';

class ClassForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            department: '',
            rating: null,
            user: [],
            isToggle: true,
        }
    }

    catchvalue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = {
            name: this.state.name,
            dapartment: this.state.department,
            rating: this.state.rating
        }
        let tempArr = this.state.user  //blank array
        tempArr.push(tempObj)
        console.log(tempArr);

        this.setState(
            {
                name: '',
                department: '',
                rating: '',
                isToggle: false,
                user: [...tempArr]
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.isToggle ?
                    <>

                        <h1>EMPLOYEE FEEDBACK FORM</h1>
                        <form>
                            <label htmlFor='name'>Name :</label>
                            <input type='text' name='name' id='name' onChange={this.catchvalue} value={this.state.name} /> <br />

                            <label htmlFor='department'>Department :</label>
                            <input type='text' name='department' id='department' onChange={this.catchvalue} value={this.state.department} />  <br />

                            <label htmlFor='rating'>Rating :</label>
                            <input type='number' name='rating' id='rating' onChange={this.catchvalue} value={this.state.rating} />  <br />

                            <input type="submit" onClick={this.handleSubmit}></input>
                            {/* //when we write somewords between input tags then nothing will be shown in the screen */}
                        </form>
                    </> :
                    <>
                     <h1>EMPLOYEE FEEDBACK DATA</h1>
                        <div className='box'>
                            {this.state.user.map((value, index) => {
                                return (
                                    <div className='child-box' key={index}>Name: {value.name} | Department: {value.department} | Rating: {value.rating}</div>
                                )
                            })}
                        </div>
                        {/* <button onClick={() => this.setState.isToggle(true)}>Back</button> */}
                  {!this.state.isToggle && <button onClick={() => this.setState({isToggle:true})}>Back</button>}
                    </>
                }

            </div>
        )
    }
}



export default ClassForm;



// there are 2 types of func. when we creating form handling
// 1. for catching the input value i.e. onchange fun.[we need to change the state variables every single time
// when user type over there in input]

// 2. for submit func. inside this first we have to write e.preventdefault() becoz this not refresh our page due to we trying to implement SPA