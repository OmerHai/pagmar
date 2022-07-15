let myIndex = 0
let myVideos = [
  '0001.mp4',
  '00002.mp4',
  '00003V.mp4'
]


function start() {
    changeVideoVisability(0,"visable");
    changeVideoVisability(1,"hidden");
    changeVideoVisability(2,"hidden");
}

function videoChanger() {
  myIndex += 1
  if (myIndex >= myVideos.length)
    myIndex = 0
    switch(myIndex){
        case 0:
            changeVideoVisability(0,"visible");
            changeVideoVisability(1,"hidden");
            changeVideoVisability(2,"hidden");
            break;
        case 1:
            changeVideoVisability(0,"hidden");
            changeVideoVisability(1,"visible");
            changeVideoVisability(2,"hidden");
            break;
        case 2:
            changeVideoVisability(0,"hidden");
            changeVideoVisability(1,"hidden");
            changeVideoVisability(2,"visible");
            break;
    }
}

function changeVideoVisability(index, vis) {
    console.log(index)
    document.querySelectorAll("video")[index].style.visibility = vis;
}



