import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit } = useForm();

    const handleLogin = (data) => {
        login(data.email, data.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, {replace: true});
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password")}
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>
                        New here? please <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
