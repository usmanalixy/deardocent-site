import React from 'react';

const FeatureCard = ({ icon, title, description, colorScheme }) => {
  const colorClasses = {
    blue: {
      accent: 'bg-gradient-to-br from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100 group-hover:bg-blue-200',
      iconColor: 'text-blue-600',
      titleHover: 'group-hover:text-blue-600'
    },
    purple: {
      accent: 'bg-gradient-to-br from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100 group-hover:bg-purple-200',
      iconColor: 'text-purple-600',
      titleHover: 'group-hover:text-purple-600'
    },
    green: {
      accent: 'bg-gradient-to-br from-green-500 to-green-600',
      iconBg: 'bg-green-100 group-hover:bg-green-200',
      iconColor: 'text-green-600',
      titleHover: 'group-hover:text-green-600'
    }
  };

  const colors = colorClasses[colorScheme] || colorClasses.blue;

  return (
    <div className="group relative w-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`absolute -top-4 left-6 sm:left-8 w-8 h-8 ${colors.accent} rounded-lg transform rotate-45`}></div>
      <div className="relative w-full">
        <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}>
          <svg className={`w-6 h-6 ${colors.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className={`text-xl font-bold text-gray-900 mb-4 ${colors.titleHover} transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
