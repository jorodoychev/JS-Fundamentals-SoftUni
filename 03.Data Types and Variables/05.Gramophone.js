function solve(band, album, song) {

    let plateFullRotation = 2.5
    let songDuration = Number((album.length * band.length) * song.length / 2)
    let rotations = Math.ceil(songDuration / plateFullRotation)

    console.log(`The plate was rotated ${rotations} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')