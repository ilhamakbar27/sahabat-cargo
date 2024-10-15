
import type { Metadata } from "next";




const metadata: Metadata = {

    

}





const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
};

export default layout;
