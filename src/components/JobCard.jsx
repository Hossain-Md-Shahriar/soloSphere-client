import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    deadline,
    category,
    job_title,
    description,
    min_price,
    max_price,
    bid_count,
  } = job || {};
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p title={description} className="mt-2 text-sm text-gray-600 ">
          {description.length < 40 ? description : `${description.substring(0, 40)}...`}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${min_price} - ${max_price}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Bid Count: {bid_count}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
