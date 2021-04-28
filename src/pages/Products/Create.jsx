import React, {useState} from 'react'
import {connect} from 'react-redux'
import {
    getItems, 
    addItem
} from '../../redux/actions/itemActions'
import PropTypes from 'prop-types'
// styling
import './style/style.scss'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import TextInput from '../../widgets/TextInput'
import SelectInputTwo from '../../widgets/SelectInputTwo'
import TextArea from '../../widgets/TextArea'
import TextInputNaira from '../../widgets/TextInputNaira'
import Button from '../../widgets/Button'
// data
const product_type_list = [
    {
        "name": "Bottled Water",
        "value": "Bottled Water"
    },
    {
        "name": "Sachet Water",
        "value": "Sachet Water"
    },
    {
        "name": "Tank of Water",
        "value": "Tank of Water"
    }
]


const Create = props => {
    const [inputs, setInputs] = useState({
        product_name: '',
        product_type: '',
        product_description: '',
        brand: '',
        max_quantity: '',
        price: ''
    });
    const { 
        product_name,
        product_type,
        product_description,
        brand,
        max_quantity,
        price
     } = inputs;
    console.log(inputs)

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const {products} = props.products

    const onSubmit = e => {
        e.preventDefault()

        const newItem = {
            id: products.length + 1,
            value: inputs.product_name
        }
        
        props.addItem(newItem)
    }

    return <div className="page normal-page">
        <SideBar active="products" function={props.function} />
        <div className="main-container">
            <Navigation name="< Create New Product" active="products" />
            <div className="content-body products">
                <section className="create-products">
                    <form className="create-products-container" onSubmit={onSubmit}>
                        <div className="image">
                            <div className="font-16">Product Image</div>
                            <div className="font-14">Click here to upload an Image of the product.</div>
                        </div>

                        <div className="item">
                            <TextInput
                                label="Product Name"
                                type="text"
                                styling="bg-white"
                                name="product_name"
                                value={product_name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="item">
                            <SelectInputTwo
                                label="Product Type"
                                options={product_type_list}
                                styling="bg-white"
                                name="product_type"
                                value={product_type}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="item">
                            <TextArea
                                label="Product Description"
                                styling="bg-white"
                                name="product_description"
                                value={product_description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="item">
                            <TextInput
                                label="Brand"
                                type="text"
                                styling="bg-white"
                                name="brand"
                                value={brand}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="item">
                            <TextInput
                                label="Max Quantity"
                                type="number"
                                styling="bg-white"
                                name="max_quantity"
                                value={max_quantity}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="item">
                            <TextInputNaira
                                label="Price"
                                type="number"
                                styling="bg-white"
                                name="price"
                                value={price}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="button-container">
                            <Button
                                text="Save"
                                type="submit"
                                styling="bg-primary button-five half-input"
                            />
                        </div>
                    
                    </form>
                    
                </section>
            </div> 
        </div>
    </div>
}

Create.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    products: state.product
})
export default connect(mapStateToProps, {getItems, addItem})(Create)