const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="max-w-lg text-center">
                <div className="text-[#255548] text-8xl font-bold">
                    404
                </div>

                <h1 className="mt-4 text-4xl font-bold text-gray-900">
                    Page Not Found
                </h1>

                <p className="mt-4 text-gray-600">
                    Sorry, the page you're looking for doesn't exist or has
                    been moved. Let's get you back to something useful.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="bg-[#255548] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Back Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="border border-[#255548] text-[#255548] px-6 py-3 rounded-lg font-semibold hover:bg-[#255548] hover:text-white transition"
                    >
                        Go Back
                    </button>
                </div>

                <div className="mt-12">
                    <div className="w-24 h-1 bg-[#255548] mx-auto rounded-full"></div>
                    <p className="mt-4 text-sm text-gray-400">
                        KeenKeeper • Keep your connections close
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;