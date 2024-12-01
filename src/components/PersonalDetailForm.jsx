
import InputGroup from "./InputGroup";
export default function PersonalDetailForm(){

    return(
        <div className="personal-details">
            <h1>Personal Details</h1>
            <InputGroup
            nameOfInput="Full Name"
            input="text"
            />
            <InputGroup
            nameOfInput="Email"
            inputType="email"
            />
            <InputGroup
            nameOfInput="Phone Number"
            inputType="tel"

            />
            <InputGroup
            nameOfInput="Address"
            inputType="text"
            />

        </div>
    );
   


}