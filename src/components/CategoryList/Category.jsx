/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Category = ({category}) => {
    const {logo, category_name, availability} = category;

    return (
        <div className="shadow-lg p-10">
            <img src={logo} className="mb-8" alt="" />
            <h1 className="mb-2 text-lg font-medium">{category_name}</h1>
            <p className="text-sm text-gray-600">{availability}</p>
        </div>
    );
};

export default Category;