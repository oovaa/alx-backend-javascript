import { createUser, uploadPhoto } from "./utils";

export default async function handleProfileSignup() {
  try {
    let a = uploadPhoto();
    let b = createUser();
    let ans = await Promise.all([a, b]);
    let body = ans[0].body;
    let fname = ans[1].firstName;
    let lname = ans[1].lastName;
    console.log([body, fname, lname].join(" "));
  } catch (e) {
    console.log("Signup system offline");
  }
}
