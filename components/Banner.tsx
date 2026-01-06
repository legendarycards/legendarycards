import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600">
      <p className="text-sm sm:text-base text-center text-white pt-1 pb-1 flex items-center justify-center gap-2">
        The data from Legenday Cards has been added to{' '}
        <a
          href="https://vault.top/app/browse/pokemon-card"
          className="font-semibold underline hover:text-gray-200 transition-colors inline-flex items-center gap-1"
        >
          TopVault
          <Image 
            src="/topvault-48.webp" 
            alt="TopVault" 
            width={20}
            height={20}
            className="rounded"
          />
        </a>
      </p>
    </div>
  );
};

export default Banner;
