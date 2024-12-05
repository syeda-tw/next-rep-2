import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Create Your Account
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Join us today and start your journey.
        </p>
        <SignUp />
      </div>
    </div>
  );
}
