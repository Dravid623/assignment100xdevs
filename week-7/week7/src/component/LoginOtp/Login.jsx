import { useNavigate } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Appbar></Appbar>
      <input type="Number" placeholder="Mobile Number"></input>
    </div>
  );
}

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/Otp");
        }}
      >
        Send OTP
      </button>
    </div>
  );
};
