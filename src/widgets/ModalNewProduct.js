import React from 'react'
// styling
import './style/modal-product.scss'
// icons
import close from '../icons/close.svg'
// widgets
import TextInput from '../widgets/TextInput'
import TextInputDouble from '../widgets/TextInputDouble'
import SelectInputDoubleTwo from '../widgets/SelectInputDoubleTwo'
import TextArea from '../widgets/TextArea'
import TextInputNaira from '../widgets/TextInputNaira'
import Button from '../widgets/Button'
// data
const product_type = [
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

const ModalNewProduct = e => {
    return <div className={e.open ? "modal-product-container modal-product-container-open" : "modal-product-container"}>
        <div className="background" onClick={e.close}></div>
            <div className="modal-product-content">
                <div className="head">
                    <span>Edit Product</span>
                    <img src={close} alt="close" onClick={e.close} />
                </div>
                <div className="image font-16">Click to change Product image</div>

                <div className="double-item">
                    <TextInputDouble
                        label="Product Name"
                        type="text"
                        styling="bg-white"
                    />
                    <SelectInputDoubleTwo
                        label="Product Type"
                        options={product_type}
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextArea
                        label="Product Description"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Brand"
                        type="text"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInput
                        label="Max Quantity"
                        type="number"
                        styling="bg-white"
                    />
                </div>

                <div className="item">
                    <TextInputNaira
                        label="Price"
                        type="number"
                        styling="bg-white"
                    />
                </div>

                <div className="button-container">
                    <span onClick={e.close}>
                        <Button
                            text="Delete Product"
                            type="button"
                            styling="bg-white-border-red button-five"
                        />
                    </span>
                    <span onClick={e.close}>
                        <Button
                            text="Save"
                            type="button"
                            styling="bg-primary button-five"
                        />
                    </span>
                </div>
            
            </div>
            <div className="modal-product-space-bottom">
            </div>
    </div>
}

export default ModalNewProduct
