import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Welcome Back</h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          Sign in to access your account.
        </p>
        <SignIn />
      </div>
    </div>
  );
}
