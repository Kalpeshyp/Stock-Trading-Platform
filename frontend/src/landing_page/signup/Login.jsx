import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { login } from "../../service/Api";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success("Login successful");
    } catch (err) {
      toast.error("Login failed");
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
