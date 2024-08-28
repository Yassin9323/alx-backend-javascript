import asyncUploadUser from './100-await';

const ffntest = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

ffntest();
