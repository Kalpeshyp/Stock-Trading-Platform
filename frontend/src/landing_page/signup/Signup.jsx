import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signup } from "../../service/Api";
import "./Signup.css";

export default function Signup() {
  const { register, handleSubmit } = useForm();

 const onSubmit = async (data) => {
   try {
     const res = await signup(data);

     toast.success(res.data.message);
   } catch (err) {
     toast.error(err.response?.data?.message || "Signup failed");
   }
 };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h1 className="signup-heading">Create your account</h1>

        <p className="signup-desc">
          Join the trading platform and start investing.
        </p>

        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              {...register("username")}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
            />
          </div>

          <button className="signup-button" type="submit">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
