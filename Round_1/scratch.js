process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "4";
var input_stdin_array = "1 2 3 4";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Print all  integers in reverse order as a single line of space-separated integers.

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number).reverse();

    arr.reduce(function(a,b) {
        return b+' '+a+' ';
    })

}

main(   )
