"use client";

import { ClerkProvider, useUser } from "@clerk/nextjs";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Progress } from "@/components/ui/progress";

// This component checks user status and conditionally renders the sidebar
const LayoutWithSidebar = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, user } = useUser(); // Get user data and loading status

  if (!isLoaded) {
    return <Progress value={33} />;
  }

  if (!user) {
    return <main>{children}</main>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
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
        <head>
          {/* Your head content goes here (meta tags, title, etc.) */}
        </head>
        <body>
          <LayoutWithSidebar>{children}</LayoutWithSidebar>
        </body>
      </html>
    </ClerkProvider>
  );
}
