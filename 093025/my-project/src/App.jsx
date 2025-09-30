import React from 'react';
import Task1Button from './Task1Button';
import Task2Input from './Task2Input';
import Task3Form from './Task3Form';
import Task4NoSpacesInput from './Task4NoSpacesInput';
import Task5SelectCheckbox from './Task5SelectCheckbox';
import Task6RHF from './Task6RHF';
import Task7RHFWithYup from './Task7RHFWithYup';

export default function App() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <Task1Button />
      <Task2Input />
      <Task3Form />
      <Task4NoSpacesInput />
      <Task5SelectCheckbox />
      <Task6RHF />
      <Task7RHFWithYup />
    </div>
  );
}
