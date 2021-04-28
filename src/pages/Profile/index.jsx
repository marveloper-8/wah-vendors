import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// styling
import './style/style.scss'
// icons
import trend_up from '../../icons/trend-up.svg'
import arrow from '../../icons/arrow-down.svg'
// widgets
import SideBar from '../../widgets/SideBar'
import Navigation from '../../widgets/Navigation'
import TextInput from '../../widgets/TextInput'
import TextInputDouble from '../../widgets/TextInputDouble'
import SelectInputTwo from '../../widgets/SelectInputTwo'
import TextArea from '../../widgets/TextArea'
import Button from '../../widgets/Button'
// data
const state = [
    {
        "name": "Lagos",
        "value": "Lagos"
    },
    {
        "name": "Abuja",
        "value": "Abuja"
    },
    {
        "name": "Ibadan",
        "value": "Ibadan"
    }
]

const lga = [
    {
        "name": "Eti-Osa",
        "value": "Eti-Osa"
    },
    {
        "name": "Ikeja",
        "value": "Ikeja"
    },
    {
        "name": "Ikorodu",
        "value": "Ikorodu"
    }
]

const Profile = e => {
    const [section, setSection] = useState({
        profile: true,
        address: false,
        operating_days: false
    })
    const [operating, setOperating] = useState({
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
    })
    const [address, editAddress] = useState(false)
    return <div className="page normal-page">
        <SideBar active="profile" function={e.function} />
        <div className="main-container">
            <Navigation name="My Account" active="profile" />
            <div className="content-body profile">
                <section>
                    <div className="navigation-head-outer">
                        <div className="navigation-head">
                            <div className={section.profile ? "active item-nav" : "item-nav"} onClick={() => setSection({
                                profile: true,
                                address: false,
                                operating_days: false
                            })}>My Profile</div>

                            <div className={section.address ? "active item-nav" : "item-nav"} onClick={() => setSection({
                                profile: false,
                                address: true,
                                operating_days: false
                            })}>Company Address</div>

                            <div className={section.operating_days  ? "active item-nav" : "item-nav"} onClick={() => setSection({
                                profile: false,
                                address: false,
                                operating_days: true
                            })}>Operating Days</div>
                        </div>
                    </div>
                    
                    {section.profile && <div className="profile-section">
                        <div className="head">
                            <div>
                                <div className="image"></div>
                            </div>
                            <div className="info">
                                <div>
                                    <div className="font-16">Change Picture</div>
                                    <div className="font-14">Max file size is 20Mb.</div>
                                </div>
                                <Button
                                    text="Upload"
                                    type="button"
                                    styling="bg-white-border-grey button-two"
                                />
                            </div>
                        </div>

                        <TextInput
                            label="Business Name"
                            type="text"
                            styling="bg-white"
                        />

                        <div className="double-item">
                            <TextInputDouble
                                label="First Name"
                                type="text"
                                styling="bg-white"
                            />
                            <TextInputDouble
                                label="Last Name"
                                type="text"
                                styling="bg-white"
                            />
                        </div>

                        <TextInput
                            label="Email Address"
                            type="email"
                            styling="bg-white"
                        />

                        <TextInput
                            label="Phone Number"
                            type="phone"
                            styling="bg-white"
                        />

                        <TextInput
                            label="NAFDAC Number"
                            type="text"
                            styling="bg-white"
                        />

                        <TextArea
                            label="Description"
                            styling="bg-white"
                        />

                        <div className="button-container">
                            <span onClick={e.close}>
                                <Button
                                    text="Save"
                                    type="button"
                                    styling="bg-primary button-five half-input"
                                />
                            </span>
                        </div>
                    </div>}
                        
                    {section.address && <div className="address-section">
                        <div className={address ? "inactive" : ""}>
                            <div className="item">
                                <div className="font-16">
                                    <div>Address 1</div>
                                    <div className="bold">8B, Talabi Street, Adeniyi Jones Avenue, Ikeja, Lagos</div>
                                    <div>Ikeja LGA</div>
                                </div>
                                <div className="action">
                                    <div className="button-top">
                                        <Button
                                            text="Edit"
                                            type="button"
                                            styling="bg-primary button-three half-input"
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            text="Delete"
                                            type="button"
                                            styling="bg-white-border-red button-three half-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {address 
                            ? <div className="inner-container">
                                <div className="semi-bold">Add Bank Beneficiary</div>
                                <div className="font-16">Add your details to match your bank account.</div>

                                <TextInput
                                    label="Company Name"
                                    type="text"
                                    styling="bg-white full-input"
                                />

                                <SelectInputTwo
                                    label="State"
                                    options={state}
                                    styling="bg-white"
                                />

                                <SelectInputTwo
                                    label="LGA"
                                    options={lga}
                                    styling="bg-white"
                                />
                                    
                                <div className="button-container">
                                    <span onClick={() => editAddress(!address)}>
                                        <Button
                                            text="Add Address"
                                            type="button"
                                            styling="bg-primary button-five half-input"
                                        />
                                    </span>
                                </div>
                            </div>
                            : <div className="inner-container-two">
                                <div className="button-container-two">
                                    <span onClick={() => editAddress(!address)}>
                                        <Button
                                            text="Add bank beneficiary"
                                            type="button"
                                            styling="bg-white-border-primary button-five full-input"
                                        />
                                    </span>
                                </div>
                            </div>
                        }
                    </div>}
                    
                    {section.operating_days && <div className="operating-days-section">
                        <div className={operating.monday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Monday</div>
                                <div className="status font-16">
                                    {operating.monday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({monday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({monday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.tuesday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Tuesday</div>
                                <div className="status font-16">
                                    {operating.tuesday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({tuesday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({tuesday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.wednesday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Wednesday</div>
                                <div className="status font-16">
                                    {operating.wednesday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({wednesday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({wednesday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.thursday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Thursday</div>
                                <div className="status font-16">
                                    {operating.thursday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({thursday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({thursday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.friday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Friday</div>
                                <div className="status font-16">
                                    {operating.friday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({friday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({friday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.saturday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Saturday</div>
                                <div className="status font-16">
                                    {operating.saturday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({saturday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({saturday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                        <div className={operating.sunday ? "active item" : "inactive-item item"}>
                            <div className="item-head">
                                <div className="day">Sunday</div>
                                <div className="status font-16">
                                    {operating.sunday ? "Open" : "Close"} &nbsp; <img src={arrow} alt="arrow" />
                                    <div className="status-container">
                                        <div className="item-status-container open" onClick={() => setOperating({sunday:true})}>Open</div>
                                        <div className="item-status-container close" onClick={() => setOperating({sunday:false})}>Close</div>
                                    </div>
                                </div>
                            </div>
                            <div className="time">
                                <span className="left">
                                    <TextInput
                                        label="Opening Time"
                                        type="time"
                                        styling="bg-white third-input"
                                        label_size={14}
                                    />
                                </span>

                                <TextInput
                                    label="Closing Time"
                                    type="time"
                                    styling="bg-white third-input"
                                    label_size={14}
                                />
                            </div>
                        </div>
                    </div>}
                </section>
            </div>
        </div>
    </div>
}

export default Profile
