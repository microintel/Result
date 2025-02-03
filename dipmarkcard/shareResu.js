document.body.addEventListener("dblclick", () => {
    sh();
});

let imgs = [
    "https://raw.githubusercontent.com/microintel/endgram/main/photo/microintel%20stamp.png",
    "https://raw.githubusercontent.com/microintel/endgram/main/photo/microintel%20marvel.jpg",
    "https://raw.githubusercontent.com/microintel/endgram/main/photo/microintel%20OI.jpeg",
    "https://raw.githubusercontent.com/microintel/endgram/main/photo/microintel_%20variant-34-min.png"
];

async function sh() {
    let urlSh = new URL(window.location.href);
    let regno = document.getElementById("i").value;
    let se = document.getElementById("se").value;
    urlSh.searchParams.set("regno", regno);
    urlSh.searchParams.set("sem", se);
    
    let imgUrl = imgs[Math.floor(Math.random() * imgs.length)];
    
    try {
        let res = await fetch(imgUrl);
        let blob = await res.blob();
        let file = new File([blob], "image.jpg", { type: blob.type });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                url: urlSh.toString()
            });
        } else {
            alert("Sharing not wirking");
        }
            } catch (err) {
        alert("Problem: " + err);
    }
}