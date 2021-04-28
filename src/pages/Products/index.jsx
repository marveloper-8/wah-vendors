import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getItems, deleteItem} from '../../redux/actions/itemActions'
import PropTypes from 'prop-types'
// styling
import './style/style.scss'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import Button from '../../widgets/Button'
import ModalNewProduct from '../../widgets/ModalNewProduct'

const Products = props => {
    const [edit, setEdit] = useState(false)

    const {products} = props.products

    console.log(props.products)

    const onDeleteClick = id => {
        props.deleteItem(id)
    }

    return <div className="page normal-page">
        <SideBar active="products" function={props.function} />
        <div className="main-container">
            <Navigation name="My Products" active="products" />
            <div className="content-body products">
                <div className="navigation-button">
                    <Link to='/products/create' className="link">
                        <Button
                            text="Create New Product"
                            type="submit"
                            styling="bg-primary button-two"
                        />
                    </Link>
                </div>
                <section>
                    <div className="list font-16">
                        {products.map(item => {
                            return <div className="item" onClick={() => onDeleteClick(item.id)}>
                                <div className="image"></div>
                                <div>{item.value}</div>
                            </div>
                        })}
                        <div className="item" onClick={() => setEdit(!edit)}>
                            <div className="image"></div>
                            <div>Just water Pack (12 Pieces )</div>
                        </div>
                    </div>
                </section>
            </div>
            <ModalNewProduct
                open={edit}
                close={() => setEdit(!edit)}
            />
        </div>
    </div>
}

Products.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    products: state.product
})
export default connect(mapStateToProps, {getItems, deleteItem})(Products)