

import HighlightText from "../../../Components/core/HomePage/HighlightText";
const steps = [
  {
    step: 1,
    title: "Introduction to Basics",
    description: "Start with fundamental concepts to build a strong foundation.",
  },
  {
    step: 2,
    title: "Hands-on Practice",
    description: "Apply your knowledge through interactive coding challenges.",
  },
  {
    step: 3,
    title: "Advanced Projects",
    description: "Work on real-world projects to gain practical experience.",
  },
  {
    step: 4,
    title: "Interview Preparation",
    description: "Get ready for placements with mock tests and interview guidance.",
  },
];

const TimelineSection2 = () => (
  <div className="w-full my-20">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-rose-200 mb-4">
        Your Learning <HighlightText text="Journey" />
      </h2>
    </div>

    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

      {steps.map((item, i) => (
        <div
          key={item.step}
          className={`flex items-center mb-8 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
        >
          <div className="w-1/2 px-8">
            <div className="bg-gradient-to-r from-richblack-800 to-richblack-700  rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-richblack-50 ">{item.title}</h3>
              </div>
              <p className="text-richblack-300 ">{item.description}</p>
            </div>
          </div>

          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
          <div className="w-1/2"></div>
        </div>
      ))}
    </div>
  </div>
);
export default TimelineSection2;
