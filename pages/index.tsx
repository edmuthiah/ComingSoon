import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Coming Soon - Clean Coming Soon Page (Tailwind CSS, NextJs & HTML5) created by themeptation.net">
    {/* <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-32 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    /> */}
    {/* <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    /> */}
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Come back soon
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">We&apos;re working on it</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          interviewme.app will help you nail the inteview. Every. Single. Time.
        </p>
      </div>
      <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
        <input
          type="text"
          placeholder="yourname@email.com"
          className="w-full text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
        />
        <button className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-red-500">
          Notify me
        </button>
      </form>
    </div>
  </Layout>
);

export default IndexPage;
