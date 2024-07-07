export const createYear = () => {
  const options = [];

  for (let i = 2024; i > 1999; i--) {
    const value = i;

    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  }
  return options;
};

export const createMonth = () => {
  const options = [];

  for (let i = 1; i < 13; i++) {
    const value = i < 10 ? `0${i}` : `${i}`;

    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  }
  return options;
};

export const createDay = () => {
  const options = [];

  for (let i = 1; i < 32; i++) {
    const value = i < 10 ? `0${i}` : `${i}`;

    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  }
  return options;
};
