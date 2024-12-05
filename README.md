# Next-Rep-2 Coding Challenge: Second Attempt

This repository contains the second attempt for the coding challenge **Next-Rep-2**. It is built using **Next.js 15** with **Clerk.js** for authentication and **ShadCN components** for styling.

---

## Features

- **Framework:** Next.js 15  
- **Authentication:** Clerk.js  
- **Styling:** ShadCN Components  

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd next-rep-2
```

### 2. Use NVM (Node Version Manager)
To ensure you are using the LTS version of Node.js, follow these steps with NVM:

- Install NVM (if not already installed) by following the instructions here.
- Install the LTS version:
```bash
nvm install --lts
```
- Use the LTS version:
```bash
nvm use --lts
```
This will set the LTS version of Node.js as your active version.


### 3. Install Dependencies
Ensure you have `npm` or `yarn` installed. Use the following command to install dependencies:

```bash
npm install
```

OR

```bash
yarn install
```

### 4. Add Environment Variables
Create a `.env.local` file in the root directory of your project and add the following keys:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
```

Replace `your_clerk_publishable_key` and `your_clerk_secret_key` with the keys provided by Clerk.

### 5. Run the Development Server
Start the development server with the following command:

```bash
npm run dev
```

OR

```bash
yarn dev
```

The application will be accessible at `http://localhost:3000`.

---

## Notes

- **Authentication Setup:** Ensure you have a Clerk project set up and have obtained the required API keys for the `.env.local` file.
- **Styling Components:** The app uses pre-configured ShadCN components for styling, which are customizable as needed.

For additional questions or issues, please refer to the documentation of [Next.js](https://nextjs.org/docs), [Clerk.js](https://clerk.dev/docs), and [ShadCN](https://shadcn.dev/).

---

## License
This project is licensed under the [MIT License](LICENSE).