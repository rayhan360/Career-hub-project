import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";
import { FaDollarSign, FaLocationDot,FaRegCalendarCheck,FaPhone, FaMessage  } from "react-icons/fa6";


 
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {job_description,job_responsibility, educational_requirements, experiences, salary, job_title, contact_information,   } = job;
    // console.log(job);
    const handleApplyNotifiy = () => {
        saveJobApplication(idInt)
        toast.success('you have applied successfully')
    }
    return (
        <div>
            <h1 className="text-center text-4xl font-medium my-5">Job Details</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border space-y-5 p-10 md:col-span-3">
                    <h1 className="font-medium">Job Description: <span className="text-gray-600 font-normal">{job_description}</span></h1>
                    <h1 className="font-medium">Job Responsibility: <span className="text-gray-600 font-normal">{job_responsibility}</span></h1>
                    <h1 className="font-medium">Education Requirement: <span className="text-gray-600 block mt-3 font-normal">{educational_requirements}</span></h1>
                    <h1 className="font-medium">Experienced: <span className="text-gray-600 block mt-3 font-normal">{experiences}</span></h1>
                </div>
                <div className="border p-8">
                    <h1 className="font-medium text-lg mb-2">Job Details</h1> <hr />
                    <div className="space-y-2 my-5">
                        <p className="flex items-center gap-2"><FaDollarSign></FaDollarSign>Salary: <span>{salary}</span></p>
                        <p className="flex items-center gap-2"><FaRegCalendarCheck></FaRegCalendarCheck>Job Title: <span>{job_title}</span></p>
                    </div>
                    <h1 className="font-medium text-lg mb-2">Contact Information</h1> <hr />
                    <div className="space-y-2 my-5">
                        <p className="flex items-center gap-2"><FaPhone></FaPhone>Phone: {contact_information.phone}</p>
                        <p className="flex items-center gap-2"><FaMessage></FaMessage>Email: <span>{contact_information.email}</span></p>
                        <div className="flex gap-2">
                            <FaLocationDot className="mt-1"></FaLocationDot>
                        <p>Address: {contact_information.address}</p></div>
                    </div>
                    <button onClick={handleApplyNotifiy} className="btn btn-primary w-full">
                        Apply now
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;