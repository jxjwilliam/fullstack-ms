const ACCOUNT = 'account';

export default {
  login: ({ account }) => {
    sessionStorage.setItem(ACCOUNT, account);
    return Promise.resolve();
  },
  logout: () => {
    sessionStorage.removeItem(ACCOUNT);
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      sessionStorage.removeItem(ACCOUNT);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return sessionStorage.getItem(ACCOUNT) ? Promise.resolve() : Promise.reject()
  },
  getPermissions: () => Promise.resolve(),
}
