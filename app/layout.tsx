import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
            <p>This is the Header</p>
            <Link href="/">Home</Link>&nbsp;
            <Link href="/notes">Notes</Link>
          </nav>
          <br />
          <br />
          <br />
          {children}
        </main>
        <br />
        <br />
        <footer>Footer details</footer>
      </body>
    </html>
  );
}

// fetch data on the layouts!
