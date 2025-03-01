import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
export const metadata = {
  title: "Content Generator - Innovative Solutions for Content-Creators",
  description:
    "Empowering startups to change the world with cutting-edge technology solutions with AI",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
