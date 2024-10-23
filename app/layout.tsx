import './globals.css';

export const metadata = {
  title: "Loan Management Software for the Smartest Lenders, Banks and ...",
  description: "The best loan management system for smart lenders, banks, and financial institutions. Start, launch, and scale your lending business with ease.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
