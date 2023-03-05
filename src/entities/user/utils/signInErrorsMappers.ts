export const signInErrorsMapper = (error?: string): Record<string, string> => {
  if (error === 'auth/invalid-email') {
    return { email: 'This email is not registered' };
  }
  if (error === 'auth/wrong-password') {
    return { password: 'Wrong password' };
  }
  return {};
};
