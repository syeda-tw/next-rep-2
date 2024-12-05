'use client'

import { ClerkProvider, useUser } from "@clerk/nextjs";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// This component checks user status and conditionally renders the sidebar
const LayoutWithSidebar = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, user } = useUser(); // Get user data and loading status

  // Render loading screen while Clerk is fetching user data
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If the user is not signed in, render only the page content without sidebar
  if (!user) {
    return <main>{children}</main>;
  }

  // Render sidebar and main content if the user is signed in
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Pass the children into the LayoutWithSidebar */}
          <LayoutWithSidebar>{children}</LayoutWithSidebar>
        </body>
      </html>
    </ClerkProvider>
  );
}
