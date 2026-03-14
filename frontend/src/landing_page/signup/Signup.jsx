import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signup, login } from "../../service/Api";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {

      await signup(data);

      toast.success("Signup successful");


      await login({
        email: data.email,
        password: data.password,
      });

      toast.success("Logged in successfully");


      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h1>Create your account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Username" {...register("username")} />

          <input placeholder="Email" {...register("email")} />

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}
