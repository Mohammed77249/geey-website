export const validateLogin = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = 'البريد الإلكتروني مطلوب';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'البريد الإلكتروني غير صحيح';
  }

  if (!password) {
    errors.password = 'كلمة المرور مطلوبة';
  } else if (password.length < 6) {
    errors.password = 'كلمة المرور يجب أن تكون أطول من 6 أحرف';
  }

  return errors;
};
