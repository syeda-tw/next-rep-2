export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 max-w-md">
      {/* Profile Card */}
      <div className="rounded-lg border border-gray-200 shadow-sm bg-white p-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Name and Title */}
        <div className="mt-4 text-center">
          <h1 className="text-lg font-semibold text-gray-800">Jane Doe</h1>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>

        {/* Bio */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Passionate about building scalable web applications and working with
            modern technologies. Coffee lover ☕ and coding enthusiast.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-6 flex justify-between text-center">
          <div>
            <p className="text-lg font-semibold text-gray-800">150</p>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">2.3K</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">230</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Follow
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
