import React, { useState, useRef, ChangeEventHandler } from 'react';

// in work, should expose value and onChange props
export function PhoneNumberInput() {
  const [inputValue, setValue] = useState('');
  const plainValue = useRef('');

  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    value = value.replace(/[^\d]/g, '').slice(0, 10);
    setValue(() => {
      const v = value;
      plainValue.current = v;
      const result = [];
      let restStart = 0;
      if (v.length >= 4) {
        result.push('(', v.slice(0, 3), ')');
        restStart = 3;
      }
      if (v.length >= 7) {
        result.push(v.slice(restStart, 6), '-');
        restStart = 6;
      }
      return result.join('') + v.slice(restStart);
    });
  };

  // your code here
  return <input value={inputValue} data-testid="phone-number-input" onChange={onInputChange} />;
}
