import React from 'react';
import FetchUsers from './FetchUsers';
import ThemeSelector from './ThemeSelector';
import AutoSaveText from './AutoSaveText';
import FetchComments from './FetchComments';
import PersistentCounter from './PersistentCounter';

export default function App() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <FetchUsers />
      <ThemeSelector />
      <AutoSaveText />
      <FetchComments />
      <PersistentCounter />
    </div>
  );
}