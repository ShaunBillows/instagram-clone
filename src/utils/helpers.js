export const changeToken = (setCookie, token) => {
  setCookie("token", token, {
    path: "/"
  });
  console.log('token changed to: ' + token);
}

export const getImages = async (setImages) => {
  try {
    const response = await fetch("https://picsum.photos/v2/list")
    const data = await response.json()
    setImages( data.map( x => x.download_url) )
  } catch (error) {
    console.log(error);
  }
}
