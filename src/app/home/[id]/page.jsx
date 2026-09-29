import React from 'react';

const getData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

    if (!res.ok) {
        throw new Error('Failed to fetch workout data');
    }

    const data = await res.json();

    return data;
};

const CardDetailes = async ({ params }) => {

    const { id } = await params;

    const cardData = await getData();

    const data = cardData.find((card) => card.id == id);

  


    return (
        <div className="min-h-screen bg-[#0b0e0d] text-base-content flex flex-col">

  {/* Main Container */}
  <div className="flex-1 container mx-auto p-6 md:p-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

    {/* Left Side: Image Section */}
    <div className="lg:col-span-5 bg-base-200 border border-base-300 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
      />
    </div>

    {/* Right Side: Details Section */}
    <div className="lg:col-span-7 flex flex-col gap-6">

      {/* Title & Description */}
      <div>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide mb-3">
          {data.name}
        </h1>

        <p className="text-base-content/70 text-sm md:text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Muscle Groups */}
      <div className="flex flex-wrap gap-2">
        {data.muscleGroups.map((muscle, index) => (
          <span
            key={index}
            className="badge badge-primary font-bold uppercase tracking-wider p-3"
          >
            {muscle}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="bg-base-200 border border-base-300 rounded-xl overflow-hidden divide-y divide-base-300 text-sm">

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Equipment
          </span>
          <span className="font-medium">{data.equipment}</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Difficulty
          </span>
          <span className="font-medium">{data.difficulty}</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Sets
          </span>
          <span className="font-medium">{data.sets}</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Reps
          </span>
          <span className="font-medium">{data.reps}</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Duration
          </span>
          <span className="font-medium">{data.duration} min</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Calories
          </span>
          <span className="font-medium">{data.caloriesBurned} kcal</span>
        </div>

        <div className="flex justify-between px-5 py-3.5">
          <span className="text-base-content/50 uppercase tracking-wider text-xs font-semibold">
            Rating
          </span>
          <span className="font-medium">{data.rating}</span>
        </div>

      </div>

      {/* Instructions */}
      <div>
        <h3 className="text-xs font-bold text-base-content/50 uppercase tracking-widest mb-3">
          Instructions
        </h3>

        <ol className="space-y-2 text-sm text-base-content/80">
          {data.instructions.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-base-content/50 font-semibold">
                {index + 1}.
              </span>

              <span className="leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">

        <button className="btn btn-primary flex-1 font-bold">
          Add to today&apos;s plan
        </button>

        <button className="btn btn-base-200 border-base-300 flex-1 font-bold">
          Save for later
        </button>

      </div>

    </div>

  </div>

</div>
    );
};

export default CardDetailes;