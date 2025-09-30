import React from 'react';
import { useForm } from 'react-hook-form';

export default function Task6RHF() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', email: '' },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input
        {...register('name')}
        placeholder="Name"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        {...register('email')}
        placeholder="Email"
        type="email"
        className="w-full px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
        Надіслати
      </button>
    </form>
  );
}
