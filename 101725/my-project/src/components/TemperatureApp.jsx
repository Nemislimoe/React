import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

function cToF(c) {
  return (c * 9) / 5 + 32;
}
function fToC(f) {
  return ((f - 32) * 5) / 9;
}

export default function TemperatureApp() {
  const [temperature, setTemperature] = useState({ value: '', scale: 'c' });

  const handleCelsiusChange = (c) => {
    setTemperature({ value: c, scale: 'c' });
  };

  const handleFahrenheitChange = (f) => {
    setTemperature({ value: f, scale: 'f' });
  };

  const celsius = temperature.scale === 'f' && temperature.value !== '' 
    ? String(parseFloat(fToC(Number(temperature.value))).toFixed(2))
    : temperature.scale === 'c'
      ? temperature.value
      : '';

  const fahrenheit = temperature.scale === 'c' && temperature.value !== ''
    ? String(parseFloat(cToF(Number(temperature.value))).toFixed(2))
    : temperature.scale === 'f'
      ? temperature.value
      : '';

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow space-y-3">
      <h3 className="text-lg font-semibold">Калькулятор температур</h3>
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
      <div className="text-sm text-gray-600">Починай вводити у будь-якому полі — друге синхронізується.</div>
    </div>
  );
}
