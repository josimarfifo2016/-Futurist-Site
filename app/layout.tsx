import "./globals.css";

import Providers from "@/components/Providers";

export const metadata = {
  title: "NeuralOS",
  description: "AI Futuristic Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt">

      <body suppressHydrationWarning>

        <Providers>

          {children}

        </Providers>

      </body>

    </html>
  );
}