/* eslint-disable react/prop-types */

import { FaLocationDot } from 'react-icons/fa6';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const AppliedJob = ({ job }) => {

    const { id,logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = job;
    return (

            <div>

                <div className="relative flex w-full justify-between flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className='flex flex-1'>
                        <div className="relative shrink-0 flex items-center overflow-hidden rounded-lg bg-gray-200 bg-clip-border text-gray-700">
                            <img
                                src={logo}
                                className="w-48 p-2"
                            />
                        </div>
                        <div className="p-6 flex-1">
                            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                {company_name}
                            </h6>
                            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {job_title}
                            </h4>
                            <div>
                                <button className="px-5 text-[#7E90FE] py-2 border rounded border-[#7E90FE] font-bold">{remote_or_onsite}</button>
                                <button className="px-5 text-[#7E90FE] py-2 ml-3 border rounded border-[#7E90FE] font-bold">{job_type}</button>
                            </div>
                            <a className="inline-block mt-4" href="#">
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                            <div className='flex gap-5 mt-3'>
                                <p className='flex items-center gap-2'><FaLocationDot className='text-base'></FaLocationDot> {location}</p>
                                <p className='flex items-center gap-1'><BsCurrencyDollar className='text-base'></BsCurrencyDollar>salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Link className="inline-block mt-4" to={`/job/${id}`}>
                            <button
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

    );
};

export default AppliedJob;