    const first = document.querySelector("#first")

setTimeout(() => {
    console.log("first")
    first.innerHTML = "WeB studio KG"
    setTimeout(() => {
        first.style.display = "none"

    },2000)
}, 1000)


const second = document.querySelector(".second")

setTimeout(() => {
    console.log("second")
    second.innerHTML = "Новый стиль. Новое начало"

    setTimeout(() => {
        second.style.display = "none"
    }, 4000)
}, 3000)

// const main = document.querySelector(".mmain")

// setTimeout(() => {
//     console.log("main")
//     main.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a consectetur velit odio debitis perferendis ea necessitatibus ipsum unde voluptatibus alias, doloremque quisquam consequatur hic quibusdam quaerat corporis saepe nam repudiandae iusto deserunt ipsa. Libero, magnam. Molestiae, dolor! Deserunt excepturi voluptatibus iste, quod sit unde quas! Laborum commodi earum ullam, iusto suscipit nemo impedit non! Sed nihil, sapiente dolorem quis tempora placeat cumque sint maxime voluptate at animi non modi consectetur magnam odio? Sequi eligendi consequatur excepturi incidunt asperiores eveniet! Non iste rerum, corrupti cum est repellendus veritatis. Neque nostrum dignissimos sapiente nemo deleniti cupiditate veniam voluptatum nesciunt dolor exercitationem. "

//     setTimeout(() => {
//         second.style.display = "none"
//     }, 4000)
// }, 7000)




// const fade_out = function() {
//   $("#first").fadeOut().empty();
// }
//
// setTimeout(fade_out, 1000);
//
// $(".formSentMsg").delay(3200).fadeOut(300);
