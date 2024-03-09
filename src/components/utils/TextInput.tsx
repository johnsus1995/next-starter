import { Input } from 'antd';
import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface TextInputProps {
  id?: string;
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (value: any) => void;
  name?: string;
  placeholder?: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id = '',
      label,
      onChange,
      inputClassName = '',
      labelClassName = '',
      name = '',
      placeholder = '',
      // error = '',
    },
    ref,
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    };

    return (
      <div className='flex flex-col gap-1 w-full'>
        <label
          className={cn('text-[#63667B] text-sm font-normal', labelClassName)}
          htmlFor={id}
        >
          {label}
        </label>
        <Input
          className={cn(
            'h-[35px] md:h-[48px] !rounded-2xl !text-base TextInput',
            inputClassName,
          )}
          id={id}
          ref={ref}
          type='text'
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          // status='error'
        />
        <p className='text-red-500 text-xs font-normal'>
          This field has some error!
        </p>
      </div>
    );
  },
);

export default TextInput;
