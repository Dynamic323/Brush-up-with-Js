let oup;
const GetanImg = async () => {
  oup = "Loading ....";
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await res.json();

    return data;
  } catch (err) {
    console.log("err" + err);
  } finally {
    oup = "Don...";
  }
};

const GetnetheActual = async () => {
  return await GetanImg();
};
GetnetheActual();

console.log(oup);
