import { useNavigate } from "react-router-dom";
export default function Complete() {
  return (
    <div>
      Login successful!!!🎉🎉🎉
      <Appbar></Appbar>
    </div>
  );
}
const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        New OTP
      </button>
    </div>
  );
};
