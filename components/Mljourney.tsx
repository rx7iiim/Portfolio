"use client";
import { motion } from "framer-motion";
import {
  FiBook,
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";

const MLJourneyWidget = ({
  milestone,
  index,
}: {
  milestone: any;
  index: number;
}) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.15 }}
    className="
      flex-shrink-0 
      w-full sm:w-80 
      bg-gradient-to-br from-gray-800/60 to-gray-900/70 
      rounded-2xl p-5 sm:p-6 
      border border-gray-700 
      hover:border-green-400/30 
      transition-all shadow-2xl 
      flex flex-col
    "
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg">
        {milestone.icon}
      </div>
      <h2 className="text-lg sm:text-xl font-bold text-white">
        <span className="text-green-400">{">"}</span> {milestone.title}
      </h2>
    </div>

    <p className="text-gray-300 text-sm mb-4">{milestone.description}</p>

    <div className="bg-gray-900/40 p-3 sm:p-4 rounded-xl flex-grow backdrop-blur-sm">
      <pre className="text-gray-200 text-xs font-mono whitespace-pre-wrap">
        {milestone.details}
      </pre>
    </div>

    {milestone.stats && (
      <div className="mt-4 grid grid-cols-2 gap-2">
        {milestone.stats.map((stat: any, i: number) => (
          <div key={i} className="bg-gray-800/50 p-2 rounded-lg text-center">
            <p className="text-green-400 text-sm font-mono">{stat.value}</p>
            <p className="text-gray-400 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

const PipelineConnector = () => (
  <div className="hidden sm:flex flex-shrink-0 w-16 items-center justify-center">
    <div className="h-1 w-full bg-gray-700 relative">
      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
    </div>
  </div>
);

export default function MLJourney() {
  const milestones = [
    {
      title: "NumPy Foundations",
      icon: <FiCode className="text-blue-400 text-xl" />,
      description:
        "Mastered numerical computing fundamentals through intensive practice",
      details:
        "• Solved 100+ NumPy exercises\n• Implemented matrix operations\n• Optimized array computations",
      stats: [
        { value: "100+", label: "Exercises" },
        { value: "85%", label: "Efficiency" },
      ],
    },
    {
      title: "Data Pipeline",
      icon: <FiDatabase className="text-green-400 text-xl" />,
      description: "Built end-to-end data processing workflows with Pandas",
      details:
        "• Cleaned 10+ Kaggle datasets\n• Automated ETL pipelines\n• Created interactive visualizations",
      stats: [
        { value: "10+", label: "Datasets" },
        { value: "5x", label: "Speedup" },
      ],
    },
    {
      title: "ML Theory",
      icon: <FiBook className="text-purple-400 text-xl" />,
      description: "Studied machine learning fundamentals from Hands-On ML",
      details:
        "• Completed 2 chapters\n• Implemented algorithms\n• Validated with cross-validation",
      stats: [
        { value: "92%", label: "Accuracy" },
        { value: "0.15", label: "RMSE" },
      ],
    },
    {
      title: "Current Focus",
      icon: <FiTrendingUp className="text-yellow-400 text-xl" />,
      description: "Building production-grade ML systems",
      details:
        "• Neural architectures\n• Model deployment\n• Performance optimization",
      stats: [
        { value: "3", label: "Projects" },
        { value: "2.5x", label: "Throughput" },
      ],
    },
  ];

  return (
    <section
      className="
        min-h-screen w-screen 
        px-4 py-12 
        bg-transparent
        flex items-center justify-center 
        rounded-2xl shadow-xl 
        mx-auto 
        flex-shrink-0
      "
      id="ml-journey"
    >
      <div className="relative w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            flex flex-col md:flex-row 
            justify-between items-start md:items-end 
            mb-8 sm:mb-10 px-2 sm:px-4
          "
        >
          <div>
            <div className="flex items-center gap-3 text-green-400 font-mono mb-2">
              <FiCpu className="text-xl sm:text-2xl" />
              <span className="text-lg sm:text-xl">~/ml_evolution</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <div className="text-center">
              <p className="text-green-400 text-xl sm:text-2xl font-mono">4</p>
              <p className="text-gray-400 text-xs sm:text-sm">Milestones</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 text-xl sm:text-2xl font-mono">
                120+
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 text-xl sm:text-2xl font-mono">8+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Projects</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress bar (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-transparent transform -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Milestones */}
          <div
            className="
              flex flex-col sm:flex-row 
              items-stretch sm:items-center 
              gap-6 sm:gap-0 
              h-auto sm:h-[400px] 
              pb-8 sm:pb-10 px-2 sm:px-4
            "
          >
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-stretch"
              >
                <MLJourneyWidget milestone={milestone} index={index} />
                {index < milestones.length - 1 && <PipelineConnector />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
