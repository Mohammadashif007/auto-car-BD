// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((res) => {
                console.log(res);
                updateUserProfile(data.name, data.photo)
                .then(() =>{
                    console.log("user updated")
                    Swal.fire({
                        icon: "success",
                        title: "User created successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/')
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch((err) => {
                console.log(err.message);
            });
            reset()
        // createUserWithEmailAndPassword(auth, data.email, data.password)
        // .then(res => {
        //     const user = res.user;
        //     console.log(user)
        // })
        // .catch(err => {
        //     console.log(err.message)
        // })
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name")}
                                placeholder="Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo")}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="input input-bordered"
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
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>
                        Already Sign Up, Please <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
