import React from "react";
import { Link } from "react-router-dom";
import { useForm,handleSubmit } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-white dark:text-black">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog "  >
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          {/* emai */}
          <div className="mt-4 space-y-2">
          <span>Email</span>
          <br/>
          <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 rounded-md border outline-none "{...register("email",{required:true})}/>
          {errors.email && <span>This field is required</span>}
          </div>
          {/* pass */}
          <div className="mt-4 space-y-2">
          <span>password</span>
          <br/>
          <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 rounded-md border outline-none" {...register("password",{required:true})}/>
          {errors.password && <span>This field is required</span>}
          </div>
          {/* butt */}
          <div className="mt-4 flex justify-around">
            <button className="bg-pink-500 px-3 py-1 hover:bg-pink-700  duration-200 rounded-md text-white">Login</button>
            <p>Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sginup</Link>{" "}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
