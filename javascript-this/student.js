/* exported student */
let student = {
  firstName: 'Cindy',
  lastName: 'Le',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';

  }
};
