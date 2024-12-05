export default function PersonalInfoSection({
  fullname,
  email,
  phoneNumber,
  address,
}) {
  <div className="personal-info">
    <h1 className="full-name">{fullname}</h1>
    <div className="contact-info">
      {email && (
        <div>
          <span>{email}</span>
        </div>
      )}

      {phoneNumber && (
        <div>
          <span>{phoneNumber}</span>
        </div>
      )}

      {
        address && (
            <div>
                <span>{address}</span>
            </div>
        )
      }
    </div>
  </div>;
}
