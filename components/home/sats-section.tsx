"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, UserCog, Calendar, Award } from "lucide-react";

const stats = [
  {
    label: "Students",
    value: 500,
    suffix: "+",
    icon: Users,
    iconColor: "text-blue-500",
  },
  {
    label: "Faculty Members",
    value: 20,
    suffix: "",
    icon: UserCog,
    iconColor: "text-green-500",
  },
  {
    label: "Years of Excellence",
    value: 10,
    suffix: "",
    icon: Calendar,
    iconColor: "text-amber-500",
  },
  {
    label: "Success Rate",
    value: 97,
    suffix: "%",
    icon: Award,
    iconColor: "text-rose-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">KMPS by Numbers</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${stat.iconColor} bg-opacity-10 dark:bg-opacity-20`}
                  >
                    <IconComponent className={`h-8 w-8 ${stat.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-primary mb-2">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy={true}
                  />
                  {stat.suffix}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
