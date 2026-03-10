import RegistrationForm from "./experiment6/RegistrationForm";
import ProfileForm from "./experiment6/ProfileForm";
import "./App.css";

function App() {
  return (
    <div className="container">

      <div className="form-card">
        <RegistrationForm />
      </div>

      <div className="form-card">
        <ProfileForm />
      </div>

    </div>
  );
}

export default App;