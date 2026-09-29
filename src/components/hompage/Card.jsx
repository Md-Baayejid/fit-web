import Image from 'next/image';
import React from 'react';

const Card = ({data}) => {
    return (
        <div
              key={data.id}
              className="card bg-[#121619] border border-gray-800 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >

              {/* Image */}
              <figure className="p-3 pb-0">
                <Image
                  width={200}
                  height={300}
                  src={data.image}
                  alt={data.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                  {data.muscleGroups?.map((muscle, index) => (
                    <div
                      key={index}
                      className="badge bg-[#ccff00] text-black border-none font-bold text-xs uppercase"
                    >
                      {muscle}
                    </div>
                  ))}
                </div>

                {/* Name */}
                <h2 className="card-title text-white uppercase">
                  {data.name}
                </h2>

                {/* Equipment */}
                <p className="text-gray-400 text-sm">
                  {data.equipment}
                </p>

                {/* Bottom Info */}
                <div className="divider my-1 border-gray-800"></div>

                <div className="flex items-center justify-between text-gray-400 text-xs">

                  <span>
                    ⏱️ {data.duration} min
                  </span>

                  <span>
                    🔥 {data.caloriesBurned} kcal
                  </span>

                  <span>
                    ⭐ {data.rating}
                  </span>

                </div>

              </div>
            </div>
    );
};

export default Card;