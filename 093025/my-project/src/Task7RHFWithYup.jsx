import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Ім’я обовʼязкове'),
  email: yup.string().required('Email обовʼязковий').email('Неправильний формат email'),
}).required();

export default function Task7RHFWithYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '' },
  });

  const onSubmit = (data) => {
    console.log('Validated data:', data);
    alert('Форма успішно відправлена (див. консоль)');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">
        Надіслати
      </button>
    </form>
  );
}
