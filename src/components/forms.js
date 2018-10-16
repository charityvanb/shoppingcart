import React from 'react'
//do we want this here?

const InputForms = (props) => {
    console.log(props)
    return (
        <form>
        <div class="form-group">
            <input class="number" type="text" placeholder="number"></input>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Products</label>
            <select class="form-control" id="exampleFormControlSelect1" placeholder="Select an option">
            {props.products.map(product => <option>{product.name}</option>)}
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
//create option and pull cartItemsList info into here- name. '$' + parseFloat(priceInCents)

export default InputForms