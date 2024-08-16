export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "lightgrey" }}>
      <body>(RootLayout){children}</body>
    </html>
  );
}
