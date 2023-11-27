import "./form.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {  
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[isTouched, setIsTouched] = useState(false);
  const [role, setRole] = useState("role");

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length > 8;
  const isFirstNameValid = firstName.trim() !== "";
  
  const getIsFormValid = () => {
    return (
      isFirstNameValid &&
      isEmailValid &&
      isPasswordValid &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value); setIsTouched(true);}}/>
            {isPasswordValid ? null : <PasswordErrorMessage />}
          </div>
          
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e)=> setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" onSubmit={handleSubmit} disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}


