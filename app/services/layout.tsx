//

import Footer from "@/components/footer";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
