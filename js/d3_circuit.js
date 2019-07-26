var guides = [[0, 0], [1, 0], [2, 0.5], [3, 10]];

var svg = d3
    .select("body")
    .append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);

var xScale = d3.scaleLinear();
xScale.domain([0, 200]).range([0, window.innerWidth]);
var yScale = d3.scaleLinear();
yScale.domain([1, 8]).range([0, window.innerHeight]);

function on_window_resize() {
    xScale.range([0, window.innerWidth]);
    yScale.range([0, window.innerHeight]);
}

window.onresize = on_window_resize;

// function draw_qubit(qubit_data) {
//     if qubit_data["type"] == "?" {
//         d3
//     }
// }

function draw_round(round_data) {
    // input: take in the JSON of a round, and draw the qubit lines

    // round_data format: (sample)
    // {
    //     "qubit0": {
    //         "type": "Zterm",
    //         "targets": [
    //             0
    //         ],
    //         "op": 3,
    //         "angle": 0.0350239283818972,
    //         "gate_id": 0
    //     },
    // },

    var qubit_group = svg.append("g");

    var line = d3
        .line()
        .x(function(d) {
            return xScale(d.qubit_id);
        })
        .y(function(d) {
            return yScale(d.qubit_id);
        })
        .curve(d3.curveCatmullRomOpen);
    qubit_group
        .selectAll("path")
        .data(round_data)
        .enter()
        .append("path")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#999");

    const nOfQubits = Object.keys(round_data).length;

    for (i = 0; i < nOfQubits; i++) {
        // we need to do something for each qubit
        qubit_data = round_data["qubit" + i.toString()];
        console.log(qubit_data);
        console.log(qubit_data["type"]);
        if (qubit_data["type"] == "?") {
            // draw a normal line
        } else {
            // we can skip
            console.log("im not bitter");
        }
    }
}

// begin by creating the qubit lines
//     // const nOfQubits = 3;
//     var sample_data = [
//         [[0, 1], [1, 1]],
//         [[0, 2], [1, 2], [2, 3], [3, 3]],
//         [[0, 3], [1, 3], [2, 2], [3, 2]],
//     ];

//     var line = d3
//         .line()
//         .x(function(d) {
//             return xScale(d[0]);
//         })
//         .y(function(d) {
//             return yScale(d[1]);
//         })
//         .curve(d3.curveCatmullRomOpen);

//     for (i = 0; i < nOfQubits; i++) {
//         svg.append("path");
//     }
//     // var lines = line(sample_data);
//     d3.selectAll("path")
//         .data(sample_data)
//         .attr("d", line)
//         .style("fill", "none")
//         .style("stroke", "#999");

// var link = d3.link().source(function(d) {
//     return d[0];
// }).target(function(d){
//     return d[1];
// });

var test_data = [[0, 0], [10, 10]];
// function test_json() {
//     d3.json("./data/rounds.json", function(error, data) {

//         d3.select("body").selectAll("p").data(data).enter().append("p").text(function(d) {return d;});
//     });
// }
// test_json();

var json_data = d3.json("./data/rounds.json");
// json_data.then(function(data) {
//     console.log(data);
// })

// json_data
//     .then(function(data) {
//         draw_round(data[0]);
//     })
//     .catch(console.log.bind(console));

function make_grid_of_points(qubits, gates) {
    var data = new Array();

    // starting positions
    var xpos = 0;
    var ypos = 0;

    for (var row = 0; row < qubits; row++) {
        data.push(new Array());
        for (var column = 0; column < gates; column++) {
            data[row].push({
                x: xScale(xpos),
                y: yScale(ypos),
            });
            // increment the x by 10
            xpos += 1;
        }
        // increment the y by 10
        ypos += 1;
        xpos = 0;
    }
    return data;
}

numberOfQubits = json_data
    .then(function(data) {
        // I want to produce a series of dots from the data
        // the xpositions of the dots are the index scaled
        // the ypositions of the dots are the qubit indices scaled
        numberOfQubits = Object.keys(data[0]).length;
        numberOfGates = data.length;
        svg.selectAll("g")
            .data(make_grid_of_points(numberOfQubits, numberOfGates))
            .enter()
            .append("g")
            .selectAll("circle")
            .data(function(d, i) {return d;})
            .enter()
            .append("circle")
            .attr("cx", function(d, i) {
                return d.x;
            })
            .attr("cy", function(d, i) {
                return d.y;
            })
            .attr("r", "0.5")
            .attr("stroke", "black");
        return numberOfQubits;
    })
    .catch(console.log.bind(console));

console.log(typeof numberOfQubits);

console.log(numberOfQubits);
