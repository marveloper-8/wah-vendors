import React from 'react'
// styling
import './style/style.scss'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import Button from '../../widgets/Button'
import SelectInputTwo from '../../widgets/SelectInputTwo'
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

const Reports = e => {
    return <div className="page normal-page">
        <SideBar active="reports" function={e.function} />
        <div className="main-container">
            <Navigation name="Reports" active="reports" />
            <div className="content-body reports">
                <div className="main-main">
                    <section>
                        <div className="total-revenue">
                            <div className="head">
                                <div>Total Revenue</div>
                                <div className="font-32 semi-bold">₦ 10,256,287.82</div>
                                <SelectInputTwo
                                    label="Product Type"
                                    options={product_type}
                                    styling="bg-white"
                                />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="side-side">
                    <section>
                        <div className="generate-report">
                            <div className="font-16">
                                Generate your report into a pdf or csv file
                            </div>
                            <Button
                                text="Generate Report"
                                type="button"
                                styling="bg-primary button-two full-input"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
}

export default Reports
