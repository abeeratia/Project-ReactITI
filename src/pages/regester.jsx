import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Regester() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const passwordValue = watch("password");

  useEffect(() => {
    console.log(" errors currently", errors);
  }, [errors]);

  function onMyhandleSubmit(data) {
    console.log(" data", data);
    reset();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form manually submitted");
          handleSubmit(onMyhandleSubmit)();
        }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold uppercase text-center text-green-600 mb-6">
          Register
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            {...register("firstname", { required: "First name is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            {...register("lastname", { required: "Last name is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmpassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Regester;











