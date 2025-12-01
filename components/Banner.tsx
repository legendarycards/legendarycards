import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1 px-4 text-center">
      <p className="text-sm sm:text-base">
        The data from Legenday Cards has been added to{' '}
        <a
          href="https://vault.top/app/browse/pokemon-card"
          className="font-semibold underline hover:text-gray-200 transition-colors"
        >
          TopVault
        </a>.
      </p>
    </div>
  );
};

export default Banner;
