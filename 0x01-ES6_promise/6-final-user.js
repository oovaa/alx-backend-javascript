import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  const sign = signUpUser(firstName, lastName)
    .then((value) => {
      status: 'fuffiled', value;
    })
    .catch((value) => {
      status: 'rejected', value;
    });
  const upload = uploadPhoto(fileName)
    .then((value) => {
      status: 'fuffiled', value;
    })
    .catch((value) => {
      status: 'rejected', value;
    });

  let ans = Promise.all([sign, upload]);
  return ans;
}
