import { createUser, uploadPhoto } from "./utils.js";

export default async function asyncUploadUser() {
  let phres = uploadPhoto();
  let ures = createUser();
  let ans;
  try {
    ans = await Promise.all([phres, ures]);
  } catch (e) {
    ans = [null, null];
  }
  return {
    photo: ans[0],
    user: ans[1],
  };
}
