import React, { useState } from 'react';

export default function Task5SelectCheckbox() {
  const [country, setCountry] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="space-y-3">
      <form className="space-y-2">
        <label className="block">
          Країна
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded"
          >
            <option value="">-- оберіть --</option>
            <option value="ua">Україна</option>
            <option value="pl">Польща</option>
            <option value="de">Німеччина</option>
            <option value="us">США</option>
          </select>
        </label>

        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="form-checkbox"
          />
          Я погоджуюсь з умовами
        </label>
      </form>

      <div className="p-3 border rounded bg-gray-50">
        <p className="text-sm">Вибрана країна: <strong>{country || 'не обрано'}</strong></p>
        <p className="text-sm">Погоджено: <strong>{agreed ? 'так' : 'ні'}</strong></p>
      </div>
    </div>
  );
}
