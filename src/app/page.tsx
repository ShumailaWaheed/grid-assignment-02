import Head from 'next/head';

export default function CustomGrid() {
  return (
    <>
      <Head>
        <title>Custom Grid Layout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5 h-auto w-full sm:grid-rows-[100px_150px_150px_100px] sm:grid-cols-2 md:grid-rows-[100px_175px_175px_100px] md:grid-cols-3 lg:grid-rows-[100px_200px_200px_100px] lg:grid-cols-3">
         
         <div className="bg-purple-400 col-span-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Header</div>
          <div className="bg-green-400 row-span-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Sidebar</div>
          <div className="bg-blue-400 col-span-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Content-1</div>
          <div className="bg-yellow-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Content-2</div>
          <div className="bg-orange-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Content-3</div>
          <div className="bg-pink-400 col-span-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center flex items-center justify-center border-2 border-white">Footer</div>
        </div>
      </div>
    </>
  );
}
