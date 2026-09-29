
import Card from '@/components/hompage/Card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch workout data');
  }

  const data = await res.json();

  return data;
};

const Home = async () => {
  const allData = await getData();

  return (
    <div className="min-h-screen bg-[#0b0e0d] p-6">

      <div className="container mx-auto">

        <div className=' mb-6 '>
            <h1 className='text-4xl my-2 font-bold' >The Libraby</h1>
            <p className='text-gray-400' >Twelve lifts covering every major muscle group</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {allData.map((data) => (
            <Link
            key={data.id}
            href={`home/${data.id}`}
            >
                <Card key={data.id} data = {data} ></Card>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;

