

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 mix-h-screen container mx-auto mt-1">
                <div className="hero-content text-center">
                    <div className="p-10 ">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br /> relationships that matter most.
                        </p>
                        <button className="btn text-white btn-active bg-[#244D3F] ">+ Add a Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;