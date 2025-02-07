import BackArrow from "@/components/BackArrow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-blue-700 text-white flex flex-col justify-between">
        <div className="px-5 md:px-20 pt-10 lg:pt-16 pb-5 border-b border-gray-300 mb-10 flex items-center">
            <BackArrow />
            <h1 className="text-2xl md:text-5xl font-light">Settings</h1>
        </div>
          {children}
        <div className="h-16 md:h-32 border-t border-gray-300"></div>
    </div>
  );
}
