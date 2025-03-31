import Nav from "../components/nav";

const Speakers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-12 gap-4 min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="col-span-1 row-span-12">
                <Nav />
            </div>

            {/* Main Content */}
            <div className="col-span-1 md:col-span-4 col-start-1 md:col-start-2 row-span-12 p-4">
                {/* Header */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h1 className="text-2xl font-bold">Speakers Management</h1>
                </div>

                {/* Search and Filters */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Enter speaker name"
                        className="bg-gray-800 text-white p-2 rounded"
                    />
                    <select className="bg-gray-800 text-white p-2 rounded">
                        <option value="">Filter by specialty</option>
                        <option value="AI">AI & Machine Learning</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Cloud">Cloud Computing</option>
                        <option value="Data">Data Science</option>
                    </select>
                </div>

                {/* Speakers List */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Speakers List</h2>
                    <div className="grid grid-cols-6 gap-4 text-center font-bold">
                        <div>ID</div>
                        <div>Full Name</div>
                        <div>Specialty</div>
                        <div>Email</div>
                        <div>Phone</div>
                        <div>Actions</div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 text-center mt-2">
                        <div>001</div>
                        <div>Maria Rodriguez</div>
                        <div>AI & Machine Learning</div>
                        <div>maria@example.com</div>
                        <div>+1 555-123-4567</div>
                        <div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
                                Edit
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded ml-2">
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* Add more rows as needed */}
                </div>

                {/* Speaker Details */}
                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-bold mb-2">Speaker Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Speaker ID: 001</h3>
                            <p>Maria Rodriguez</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Contact Information</h3>
                            <p>Email: maria@example.com</p>
                            <p>Phone: +1 555-123-4567</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold">Upcoming Conferences</h3>
                            <p>AI Summit 2023</p>
                        </div>
                    </div>
                </div>

                {/* Add/Edit Speaker */}
                <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Add/Edit Speaker</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-gray-800 text-white p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Specialty"
                            className="bg-gray-800 text-white p-2 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-gray-800 text-white p-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="bg-gray-800 text-white p-2 rounded"
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Speakers;