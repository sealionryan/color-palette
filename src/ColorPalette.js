import React, { useState } from 'react';

const customColorSystem = {
  50: '#F0F7F8',
  100: '#D9EBED',
  200: '#B4D7DC',
  300: '#8FC2CA',
  400: '#6AADB8',
  500: '#4596A3',
  600: '#2F7885',
  700: '#1E5F6B',
  800: '#0E4C5D',
  900: '#083945',
  925: '#052F3A',
  950: '#032428'
};

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  return (
    <div className="flex flex-col w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      {Object.entries(customColorSystem).map(([lightness, hex]) => (
        <div
          key={lightness}
          className="flex items-center justify-between p-4 cursor-pointer transition-all hover:opacity-90"
          style={{ backgroundColor: hex }}
          onClick={() => copyToClipboard(hex)}
        >
          <span className={`font-bold ${parseInt(lightness) > 500 ? 'text-white' : 'text-black'}`}>
            {lightness}
          </span>
          <span className={`font-mono ${parseInt(lightness) > 500 ? 'text-white' : 'text-black'}`}>
            {hex}
          </span>
          {copiedColor === hex && (
            <span className="ml-2 text-xs bg-white text-black px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;