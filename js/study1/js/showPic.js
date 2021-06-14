
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        console.log("addLoadEvent第一次执行！");
        window.onload = func;
    } else {
        console.log("addLoadEvent多次执行！");
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


function showPic(whichpic) {

    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            console.log("a");
            return showPic(this) ? false : true;

        }

    }

}


function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }

}
addLoadEvent(prepareGallery);

/* var searchInsert = function (nums, target) {

    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = (left + right) / 2;
        if (nums[mid] > target) { right = mid - 1; }
        else if (nums[mid] < target) { left = mid + 1; }
        else {
            return mid;
        }
    }
    return left;
};
alert(Math.floor(searchInsert([1, 3, 5, 6], 2))); */

/* var minSubArrayLen = function (target, nums) {
    for (var j = 1; j <= nums.length; j++) {
        var i = 0;
        var sum = 0;
        while ((j + i) <= nums.length) {

            for (var x = i; x < j + i; x++) {
                sum += nums[x];

            }
            if (target <= sum) {
                return j;

            }
            i++;
            sum = 0;
        }
    }
    return 0;


};
alert(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); */