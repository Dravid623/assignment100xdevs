import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`${index + 1}`).focus();
    }
    setOtp(newOtp);
  };
  return (
    <div>
      <h2>Enter OTP</h2>
      <div>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`${index}`}
            maxLength={1}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
        <Appbar></Appbar>
      </div>
    </div>
  );
}

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/complete");
        }}
      >
        Submit OTP
      </button>
    </div>
  );
};
