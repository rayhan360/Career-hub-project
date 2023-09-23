/* eslint-disable react/prop-types */
import { FaLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';



// eslint-disable-next-line react/prop-types
const Job = ({ job }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
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
                <div className='flex mt-3'>
                    <p className='flex items-center gap-2'><FaLocationDot className='text-base'></FaLocationDot> {location}</p>
                    <p className='flex items-center gap-2'><BsCurrencyDollar className='text-base'></BsCurrencyDollar>salary: {salary}</p>
                </div>
                <div className="card-actions mt-2">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;