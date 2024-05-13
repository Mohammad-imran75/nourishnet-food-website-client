import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex items-center lg:max-w-5xl mx-auto sm:p-16 bg-lime-300 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src="https://i.ibb.co/CQZsKf9/2676383.jpg" alt="" />
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><button className="btn w-full bg-orange-700">Back To home Page</button></Link>
	</div>
</section>
    );
};

export default ErrorPage;