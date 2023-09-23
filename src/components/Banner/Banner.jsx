import user from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mx-">
                <div className="hero-content grid grid-cols-2">
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none">Get Started</button>
                    </div>
                    <img src={user} className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;