
export function dispNum(position, num = 0, color = "black") {

    let topBar = position[0].childNodes[1]
    let first_two_1 = position[0].childNodes[3].childNodes[1]
    let first_two_2 = position[0].childNodes[3].childNodes[3]
    let midBar = position[0].childNodes[5]
    let second_two_1 = position[0].childNodes[7].childNodes[1]
    let second_two_2 = position[0].childNodes[7].childNodes[3]
    let bottomBar = position[0].childNodes[9]

    switch (num) {
        case 0:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 1:
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 2:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            bottomBar.style.background = color
            break;
        case 3:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 4:
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            break;
        case 5:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 6:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 7:
            topBar.style.background = color
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 8:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 9:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        default:
            topBar.style.background = "transparent"
            first_two_1.style.background = "transparent"
            first_two_2.style.background = "transparent"
            midBar.style.background = "transparent"
            second_two_1.style.background = "transparent"
            second_two_2.style.background = "transparent"
            bottomBar.style.background = "transparent"
            break;
    }

}
