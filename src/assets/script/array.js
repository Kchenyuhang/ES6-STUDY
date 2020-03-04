window.onload = function() {
    var ele = this.document.getElementById('card1')
    var arr1 = [8]
    var arr2 = [9,11,12,456,846,13]
    arr1.push(...arr2)
    console.log(arr1)
    ele.innerHTML = arr1
}