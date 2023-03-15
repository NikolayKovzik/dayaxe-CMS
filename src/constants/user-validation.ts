const validation = {
  email: {
    required: 'This field is required',
    message: 'Enter correct email',
    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    required: 'This field is required',
    message: 'Min length: 4',
  },
  username: {
    required: 'This field is required',
    message: 'Min length: 3',
  },
  image: {
    required: 'This field is required',
  },
};

export default validation;
