// search filter

function search() {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-List")
    const product = document.querySelectorAll(".product-card")
    const pname = storeItems.querySelectorAll(".product-catogory")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].querySelectorAll('.product-catogory')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}