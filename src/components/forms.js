import React from 'react'

const InputForms = (props) => {

    return (
        <div className="container">
        <form>
        <div className="form-group">
            <label>Quantity</label>
            <br></br>
            <input onChange={props.onChange} name="quantity" className="number" type="text" placeholder="number"></input>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Products</label>
            <select onChange={props.onChange} className="form-control" name="name" id="exampleFormControlSelect1" placeholder="Select an option">
            {props.products.map((product, index) => <option
                key={index}
                value={product.name}>
                    {product.name}
                </option>)}
            </select>
        </div>
        <button onClick={props.onSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default InputForms