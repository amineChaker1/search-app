import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section class="bg-white ">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
          Bienvenue de retour !
        </h2>
        <p class="mb-8 lg:mb-16  text-center  sm:text-xl">
          Ravi de vous revoir, connectez-vous à votre compte et si vous êtes
          nouveau ici,{" "}
          <Link to="/register" className=" underline font-semibold">
            {" "}
            Inscrivez-Vous.
          </Link>
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Votre email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="shadow-sm outline-secondary  text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="utlisateur@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Votre Mot De Pass
            </label>
            <input
              type="password"
              id="password"
              class="block p-3 w-full text-sm text-gray-900  rounded-lg outline-secondary shadow-sm border-2 border-primary focus:ring-primary focus:border-primary  placeholder-primary dark:shadow-sm-light"
              placeholder="mot de pass"
              required
            />
          </div>

          <button
            type="submit"
            class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-primary  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Se Connecter
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;