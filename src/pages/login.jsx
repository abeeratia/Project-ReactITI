import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm( {
    mode: "onChange",
  });
  console.log("❌❌❌❌❌errors currently ", errors);

  function onMyhandleSubmit(data) {
    console.log(" data data data data", data);
    reset();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <form
        onSubmit={handleSubmit(onMyhandleSubmit)}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold uppercase text-center text-green-600 mb-6">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Submit
        </button>{" "}
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  );
}

export default Login;
