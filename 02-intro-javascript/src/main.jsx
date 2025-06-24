// const apiKey = "mzsW3Of73pklhP80FL7ohFAJUF3ekKvg";
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//
// peticion.then(resp => resp.json())
//     .then(({ data }) => {
//         const url = data.images.original.url;
//         const img = document.createElement("img");
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);

const getImage = async () => {
    try {
        const apiKey = "mzsW3Of73pklhP80FL7ohFAJUF3ekKvg";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
};

getImage();