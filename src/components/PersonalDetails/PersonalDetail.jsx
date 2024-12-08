import InputGroup from "../InputGroup.jsx";
import '../../styles/PersonalDetail/PersonalDetails.css'

export default function PersonalDetail({
  onChange,
  name,
  email,
  phoneNumber,
  address,
}) {

    return(
        <form className="personal-details">
            <h2>Personal Details</h2>
            <InputGroup
            inputType="text"
            id="full-name"
            labelText= "Full Name"
            placeholder="First and Last Name"
            value={name}
            onChange={onChange}
            data-key="name"
            />
            <InputGroup
            inputType="email"
            id="email"
            labelText="Email"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={onChange}
            data-key="email"
            />
            <InputGroup 
            inputType="tel"
            id="phone-number"
            labelText="Phone Number"
            value={phoneNumber}
            onChange={onChange}
            data-key="phoneNumber"
            />
            <InputGroup
            inputType="text"
            id="address"
            labelText="Address"
            value={address}
            onChange={onChange}
            data-key="address"
            />

        </form>
    );
}
