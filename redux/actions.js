export const isLoggedInAction = (type) => {
  return {
    type,
  };
};

export const handleCartAction = (type, product) => {
  return {
    type,
    product,
  };
};

export const renderAction = (type) => {
  return {
    type,
  };
};
