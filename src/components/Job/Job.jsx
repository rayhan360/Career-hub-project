/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // eslint-disable-next-line no-unused-vars
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary  } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 text-[#7E90FE] py-2 border rounded border-[#7E90FE] font-bold">{remote_or_onsite}</button>
                    <button className="px-5 text-[#7E90FE] py-2 ml-3 border rounded border-[#7E90FE] font-bold">{job_type}</button>
                </div>
                <div>
                    <p>{location}</p>
                    <p>salary: {salary}</p>
                </div>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;