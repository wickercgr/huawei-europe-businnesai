// src/utils/account.js
// Basit localStorage tabanlı kullanıcı yönetimi

const USERS_KEY = 'business_ai_users';

export function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export function addUser({ name, email, password }) {
  const users = getUsers();
  // E-posta zaten kayıtlı mı kontrol et
  if (users.some(u => u.email === email)) {
    return { success: false, message: 'E-mail already registered.' };
  }
  users.push({ name, email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { success: true };
}

export function validateUser({ email, password }) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  }
  return { success: false, message: 'Invalid e-mail or password.' };
}
