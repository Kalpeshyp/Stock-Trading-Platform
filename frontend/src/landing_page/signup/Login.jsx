import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { login } from "../../service/Api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await login(data);

      toast.success(res.data.message);

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />

      <input type="password" placeholder="Password" {...register("password")} />

      <button type="submit">Login</button>
    </form>
  );
}
