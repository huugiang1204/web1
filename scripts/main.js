class SanPham {
	constructor (id, price, name, brand, color, image) {
		this.id = id;
		this.price = price;
		this.name = name;
		this.brand = brand;
		this.color = color;
		this.image = image;
		
	}
}
// MENU
var menu = new Array ();
var menuLabel = new Array ("Adidas", "Asisc", "Nike","Puma","Converse");
var menuUrl = new Array ("Adidas", "Asisc", "Nike","Puma" , "Converse");
menu[0] = new Array ("0","Giày thể thao nam" , "Giày thể thao nữ");
menu[1] = new Array ("0","Giày thể thao nam" , "Giày thể thao nữ");
menu[2] = new Array ("0","Giày thể thao nam" , "Giày thể thao nữ");
menu[3] = new Array ("0","Giày thể thao nam" , "Giày thể thao nữ");
menu[4] = new Array ("0","Giày thể thao nam" , "Giày thể thao nữ");


// ITEM
var item = new Array();	//0: id; 1: price; 2: name; 3: brand; 4: color; 5: image;
item[0] = new SanPham ();
item[0] = new SanPham ();
item[1] = new SanPham ("ADG-001", "350.000", "Giày thể thao nữ", "Adidas", "Tím", "images/imgsp/anh1.jpg");
item[2] = new SanPham ("ADB-002", "450.000", "Giày thể thao nam", "Adidas", "Trắng", "images/imgsp/anh2.jpg");
item[3] = new SanPham ("ADB-003", "600.000", "Giày thể thao nam", "Adidas", "Trắng", "images/imgsp/anh3.jpg");
item[4] = new SanPham ("ADG-004", "700.000", "Giày thể thao nữ", "Adidas", "Trắng ", "images/imgsp/anh4.jpg");
item[5] = new SanPham ("ADB-005", "200.000", "Giày thể thao nam", "Adidas", "Trắng", "images/imgsp/anh5.jpg");
item[6] = new SanPham ("ADB-006", "500.000", "Giày thể thao nam", "Adidas", "Xám", "images/imgsp/anh6.jpg");
item[7] = new SanPham ("NIB-007", "300.000", "Giày thể thao nam", "Nike", "Nâu", "images/imgsp/anh7.jpg");
item[8] = new SanPham ("NIB-008", "250.000", "Giày thể thao nam", "Nike", "Đen", "images/imgsp/anh8.jpg");
item[9] = new SanPham ("NIB-009", "315.000", "Giày thể thao nam", "Nike", "Đen", "images/imgsp/anh9.jpg");
item[10] = new SanPham ("NIG-0010", "700.000", "Giày thể thao nữ", "Nike", "Đỏ Trắng ", "images/imgsp/anh10.jpg");
item[11] = new SanPham ("NIB-0011", "620.000", "Giày thể thao nam", "Nike", "Trắng", "images/imgsp/anh11.jpg");
item[13] = new SanPham ("ASB-012", "300.000", "Giày thể thao nam", "Asisc", "Xám", "images/imgsp/anh13.jpg");
item[14] = new SanPham ("ASB-013", "250.000", "Giày thể thao nam", "Asisc", "Trắng", "images/imgsp/anh14.jpg");
item[15] = new SanPham ("ASB-014", "530.000", "Giày thể thao nam", "Asisc", "Cam", "images/imgsp/anh15.jpg");
item[16] = new SanPham ("ASG-015", "700.000", "Giày thể thao nữ", "Asisc", "Hồng ", "images/imgsp/anh16.jpg");
item[17] = new SanPham ("ASB-016", "780.000", "Giày thể thao nam", "Asisc", "Xanh", "images/imgsp/anh17.jpg");
item[18] = new SanPham ("ASB-017", "880.000", "Giày thể thao nam", "Asisc", "Xanh", "images/imgsp/anh18.jpg");
item[19] = new SanPham ("ASB-018", "459.000", "Giày thể thao nam", "Asisc", "Cầu vồng", "images/imgsp/anh19.jpg");
item[20] = new SanPham ("ASB-019", "256.000", "Giày thể thao nam", "Asisc", "Cầu vồng", "images/imgsp/anh20.jpg");
item[21] = new SanPham ("PUB-020", "140.000", "Giày thể thao nam", "Puma", "Xanh", "images/imgsp/anh29.jpg");
item[22] = new SanPham ("PUB-021", "250.000", "Giày thể thao nam", "Puma", "Xanh", "images/imgsp/anh30.jpg");
item[23] = new SanPham ("PUG-022", "1.480.000", "Giày thể thao nữ", "Puma", "Đỏ", "images/imgsp/anh31.jpg");
item[24] = new SanPham ("CVB-023", "399.000", "Giày thể thao nam", "Converse", "Đỏ", "images/imgsp/anh25.jpg");
item[25] = new SanPham ("CVB-024", "299.000", "Giày thể thao nam", "Converse", "Xanh", "images/imgsp/anh28.jpg");
item[26] = new SanPham ("CVG-026", "450.000", "Giày thể thao nữ", "Converse", "Đen", "images/imgsp/anh26.jpg");
item[27] = new SanPham ("CVG-026", "499.000", "Giày thể thao nữ", "Converse", "Sọc", "images/imgsp/anh27.jpg");
item[28] = new SanPham ("PUG-027", "140.000", "Giày thể thao nữ", "Puma", "Vàng", "images/imgsp/anh32.jpg");
item[29] = new SanPham ("ASG-028", "799.000", "Giày thể thao nữ", "Asisc", "Hồng ", "images/imgsp/anh33.jpg");
item[30] = new SanPham ("ASG-029", "500.000", "Giày thể thao nữ", "Asisc", "Hồng", "images/imgsp/anh34.jpg");
item[31] = new SanPham ("ASG-030", "300.000", "Giày thể thao nữ", "Asisc", "Đỏ ", "images/imgsp/anh35.jpg");
item[32] = new SanPham ("NIG-021", "1.00.000", "Giày thể thao nữ", "Nike", "Đỏ", "images/imgsp/anh36.jpg");
item[33] = new SanPham ("NIG-032", "2.000.000", "Giày thể thao nữ", "Nike", "Đỏ Tím", "images/imgsp/anh37.jpg");
item[34] = new SanPham ("NIG-033", "999.000", "Giày thể thao nữ", "Nike", "Đen", "images/imgsp/anh38.jpg");
item[35] = new SanPham ("PUB-034", "340.000", "Giày thể thao nam", "Puma", "Xanh", "images/imgsp/anh39.jpg");
item[36] = new SanPham ("PUB-035", "690.000", "Giày thể thao nam", "Puma", "Xám", "images/imgsp/anh40.jpg");
item[37] = new SanPham ("PUG-035", "480.000", "Giày thể thao nữ", "Puma", "Trắng", "images/imgsp/anh41.jpg");
item[38] = new SanPham ("PUG-037", "280.000", "Giày thể thao nữ", "Puma", "Xám", "images/imgsp/anh42.jpg");
item[39] = new SanPham ("CVB-038", "750.000", "Giày thể thao nam", "Converse", "Xám", "images/imgsp/anh49.jpg");
item[40] = new SanPham ("CVB-039", "240.000", "Giày thể thao nam", "Converse", "Trắng", "images/imgsp/anh26.jpg");
item[41] = new SanPham ("CVG-040", "540.000", "Giày thể thao nữ", "Converse", "Trắng", "images/imgsp/anh43.jpg");
item[42] = new SanPham ("CVG-041", "299.000", "Giày thể thao nữ", "Converse", "Đen", "images/imgsp/anh44.jpg");
item[12] = new SanPham ("ASB-042", "800.000", "Giày thể thao nam", "Asisc", "Xám", "images/imgsp/anh12.jpg");
item[43] = new SanPham ("ADG-043", "170.000", "Giày thể thao nữ", "Adidas", "Xám", "images/imgsp/anh47.jpg");
item[44] = new SanPham ("ADG-044", "290.000", "Giày thể thao nữ", "Adidas", "Hồng", "images/imgsp/anh48.jpg");
/* ------------------------ */

function getSearchBar () {
	var s = "";

	s += `<div style="width: 200px; min-height: 30px; float: left">
			<input id="searchBar" type="text" name="search" placeholder="Tìm kiếm" style="width: 75%">
			<input id="searchBtn" type="button" name="goSearch" value="🔎" style="width: 20%" onclick="goSearch(document.getElementById('searchBar').value)"/>
		</div>`;

	/* s += `</script>`;	*/
	document.getElementById("sidebar").innerHTML += s;
}

function getCartBtnNum () {
	var s = "";
	var itemArray = getCartList();
	if (itemArray.length <= 0)
		return;

	s += `<div id="cartBtnNum">
			<p>` + itemArray.length + `</p>
		</div>`;

	document.getElementById("cartBtn").innerHTML += s;
}

function getMenu () {
	var s = "";
	
	var page = 1;		//Default page

	s += `<table cellspacing="0">`;

	for (var i=0; i<menu.length; i++) {
		s += `<tr>
				<td>
					<a href="index.html?` + menuUrl[i] + `&0&` + page + `\" target=\"_self\" title=\"` + menuLabel[i] + `\">` + menuLabel[i] + `</a>
					<div>
						<ul>`;

							for (var j=1; j<menu[i].length; j++) {
								s += "<li><a href=\"index.html?" + menuUrl[i] + "&" + j + "&" + page +"\" target=\"_self\" title=\"" + menu[i][j] + "\">" + menu[i][j] + "</a></li>";
							}

		s += `			</ul>
					</div>
				</td>
			</tr>`;
	}

	s += "</table>";

	document.getElementById("sidebar").innerHTML += s;
}

function getProductWindow () {
	var s = "";
	var url = window.location.href;
	var splitter = url.split('?');			// [index.html]?[ao&1&0]
	var splitted = "";
	if (url = splitter)					// url == splitter => index.html
		splitted = splitter[1];				// [ao&1&0]
	var params = splitted.split('&');		// [ao]&[1]&[0] ; 0: Category; 1: Subcategory; 2: Page

	
	
	// EXPERIMENTAL
	items = new Array ();			// filtered array
	var itemOnPage = 50;
	var itemStart = itemOnPage*(params[2]-1)+1;
	var itemEnd = itemOnPage*(params[2]-1)+itemOnPage;
	
	
	// Filter products
	items.push (items[i]);	// empty item
	if (splitter[1]==true)   // Home page
	{
						
	}
	else {
		switch (params[0]) {
			case 'Adidas': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
						if (kind[0]=="ADB" || kind[0]=="ADG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ADB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ADG")
								items.push (item[i]);
						}
						break;
					}
					
					
				}
				break;
			}
			case 'Asisc': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ASG" || kind[0]=="ASB")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ASB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="ASG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'Nike': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIB" || kind[0]=="NIG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'Nike': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIB" || kind[0]=="NIG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="NIG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'Puma': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUB" || kind[0]=="PUG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'Puma': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUB" || kind[0]=="PUG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="PUG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
			case 'Converse': {
				switch (params[1]) {
					case '0': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="CVB" || kind[0]=="CVG")
								items.push (item[i]);
						}
						break;
					}
					case '1': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="CVB")
								items.push (item[i]);
						}
						break;
					}
					case '2': {
						for (var i=item.length-1; i>=1; i--) {
							var kind = item[i].id.split('-');
							if (kind[0]=="CVG")
								items.push (item[i]);
						}
						break;
					}
				}
				break;
			}
		}
		// Filter products (SEARCH)
		if (params[0].split("=")[0]=="search") {
			var searchKeyword = params[0].split("=")[1];
			searchKeyword = searchKeyword.toLowerCase();
			for (var i=1; i<item.length; i++) {
				var comparator = getComparator (item[i]);
				var keywordSplitted = searchKeyword.split("+");
				var count=0;
				for (var j=0; j<keywordSplitted.length; j++)
					if (comparator.indexOf(keywordSplitted[j])!=-1)
						count++;
				if (count == keywordSplitted.length)
					items.push (item[i]);
			}
		}
		// Product detail
		else if (params[0].split("=")[0]=="detail") {
			var itemID = params[0].split("=")[1];
			getProductDetail (itemID);
			return;
		}
		// Cart View
		else if (params[0].split("=")[0]=="cart") {
			getCartView ();
			return;
		}

	}

	console.debug ("before: " + itemStart + " " + itemEnd);

	if (itemEnd >= items.length)			// stop showing item
		itemEnd = items.length-1;

	console.debug ("after: " + itemStart + " " + itemEnd);

	//Show products
	for (var i=itemStart; i<=itemEnd; i++) {
		console.debug (i + " " + items[i].name);
		s += getProduct (i, items);
	}
	
	//alert (s);
	document.getElementById("main").innerHTML += s;
}

function getProductID (spID) {
	for (var i=1; i<item.length; i++)
		/*console.debug (spID + " " + item[i].id);*/
		if (spID == item[i].id)
			return i;
	return -1;
}

function getProduct (i, item) {
	/*item[] trong day la` items[] da~ dc filter*/
	var s = "";
	var prodID = getProductID(item[i].id);

	s += `<div id="productDiv">
			<a href="index.html?detail=` + prodID + `">
			<img src="` + item[i].image + `" width="178px" height="178px" ></a><br>
			<div>
				<p><span class="brand\">` + item[i].brand + `</span></p>
				<p>` + item[i].name + `</p>
				<p>` + item[i].color + `</p>
				<p><span class="price">` + item[i].price + `₫</span>`;
	
	s += 		`</p>
				<input type="button" name="addToCartBtn" class="gio" value="Thêm vào giỏ" onclick="addToCart(` + prodID + `)"/>	
			</div>
		</div>`;

	return s;
}

function getProductDetail (id) {
	var s = "";

	s += `<div style="float: left">
			<img src="`+ item[id].image + `" width="300px" height="300px" margin-top="10px">
		</div>
		<div id="productDetail">
			<h1>` + item[id].name + `</h1>
			<p>Thương hiệu: ` + item[id].brand + `</p>
			<p>Loại: Vải</p>
			<p>Màu: ` + item[id].color + `</p>
			<p>Mã SP: ` + item[id].id + `</p>
			<p style="margin: 1em 0"><span id="detailPrice">` + item[id].price + `₫</span>`;
			s +=`</p>
		</div>`;

	document.getElementById("main").innerHTML += s;
}

function getCartView () {
	var s = "";
	var itemArray = getCartList();

	s += `<h1>Giỏ hàng</h1>`
		for (var i=0; i<itemArray.length; i++) {
			var itemID = itemArray[i];
			var itemAmount = window.localStorage.getItem ("item"+itemID);

			s += `<div class="cartWindow">
					<a href="index.html?detail=` + itemID + `">
					<div style="float: left; width: 100px; height: 100px">
						
							<img src="` + item[itemID].image + `" width="100px" height="100px"/>
						
					</div>
					<div class="cartItem">
						<p><span class="cartItemName">` + item[itemID].name + `</span></p>
						<p>Thương hiệu: ` + item[itemID].brand + `</p>
						<p>Mã SP: ` + item[itemID].id + `</p>
						<p><span class="cartItemPrice">` + item[itemID].price + `₫</span>`
					s += `</p>
					</div>
					</a>
					<div class="cartOptions">
						<p>Số lượng: </p>
						<input type="button" name="amountDecrease" value="-" style="width: 10px; padding: 0" onclick="changeCartItemAmount(` + itemID + `, '-')"/>
						<input type="text" id="item1Amount" value="` + itemAmount +`" style="width: 30px" onchange="changeCartItemAmount(` + itemID + `, this.value)" />
						<input type="button" name="amountIncrease" value="+" style="width: 10px; padding: 0" onclick="changeCartItemAmount(` + itemID + `, '+')"/>
						<input type="button" name="deleteItem" id="xoa" value="Xóa" style="margin: 1.25em 0 0 2.5em" onclick="removeCartItem(` + itemID + `)"/>
					</div>
				</div>`;
		}
			
	s += 	`<div style="float: left; clear: both; margin-top: 1em">
				<p>Thành tiền: </p>
				<h1 style="margin: 0; color: #ff9700;">` + totalCart(itemArray) + `₫</h1>
			</div>
			<div style="float: left; clear: both; margin: 1em 0">`
			if (totalCart(itemArray)>0)
				s += `<input class="cartPay" type="button" name="checkout" value="Thanh toán" onclick="checkOut()"/>
						<input class="cartClear" type="button" name="clear" value="Xóa hết" onclick="clearCart()"/>`;
	s +=	`</div>`;

	document.getElementById("main").innerHTML += s;
}

function getPageBtn (page, params) {
	//console.debug (page + " " + params[2] + params);

	var s = "";
	var pageAltered = page;
	var kind = "pageBtn";

	if (page == params[2])
		kind = "pageBtnActive";
	if (page == "<")
		pageAltered = parseInt(params[2])-1;
	else if (page == ">")
		pageAltered = parseInt(params[2])+1;
	else if (page == "<<")
		pageAltered = 1;

	
}

function getCarousel () {
	var s = "";
	

  document.getElementById("main").innerHTML += s;
}

function goSearch (keyword) {
	var s = `index.html?search=`;
	keyword = removeTone (keyword);
	keyword = keyword.replace (/ /g, "+");						//OPTIONAL
	s += keyword;
	s += `&0&1`;
	window.location.href = s;
}

/* CART */

function addToCart (id) {
	var itemIden = "item" + id;
	addItemToCart (itemIden, 1);

}
function addItemToCart (iden, amount) {
	var currentAmount = window.localStorage.getItem (iden);
	if (currentAmount == null) {
		currentAmount = 0;
	}
	var newAmount = parseInt(currentAmount) + amount;
	window.localStorage.setItem (iden, newAmount);
	/*alert (window.localStorage.getItem (iden));*/
	window.location.href = window.location.href;
}

function changeCartItemAmount (id, amount) {
	var currentAmount = window.localStorage.getItem ("item"+id);
	if (amount == '-')
		amount = parseInt(currentAmount)-1;
	else if (amount == '+')
		amount = parseInt(currentAmount)+1;
	if (parseInt(amount) < 1)
		amount = 1;
	window.localStorage.setItem ("item"+id, amount);
	window.location.href = "index.html?cart";
}

function removeCartItem (id) {
	window.localStorage.removeItem ("item"+id);
	window.location.href = "index.html?cart";
}

function clearCart () {
	var itemArray = getCartList();
	for (var i=0; i<itemArray.length; i++) {
		var spID = itemArray[i];
		window.localStorage.removeItem ("item"+spID);
	}
	window.location.href = "index.html";
}

function checkOut () {
	if (confirm("Bạn chắc chắn muốn mua?")==false)
		return;
	alert ("Mua thành công!");
	// TODO: Thêm vào đơn đặt hàng
	clearCart ();
}

function totalCart (itemArray) {
	var total = 0;
	for (var i=0; i<itemArray.length; i++) {
		var spID = itemArray[i];
		var newPrice = parseInt(item[spID].price.replace(/\./g, ''));
		var currentAmount = window.localStorage.getItem ("item"+spID);
		total += newPrice * currentAmount;
	}
	return total;
}

function getCartList () {
	var itemArray = new Array();
	for (var i=1; i<item.length; i++) {
		var itemAmount = window.localStorage.getItem ("item"+i);
		if (itemAmount != null && itemAmount>0)
			itemArray.push(i);
	}
	return itemArray;
}

/* end CART */

function removeTone(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

function getComparator (item) {
	var comparator = "";
	var cID = item.id.toLowerCase();
	var cName = removeTone(item.name.toLowerCase()).split(" ");
	var cBrand = removeTone(item.brand.toLowerCase()).split(" ");
	var cColor = removeTone(item.color.toLowerCase()).split(" ");

	comparator += cID + " ";
	for (var i=0; i<cName.length; i++) {
		comparator += cName[i] + " ";	
	}
	for (var i=0; i<cBrand.length; i++) {
		comparator += cBrand[i] + " ";	
	}
	for (var i=0; i<cColor.length; i++) {
		comparator += cColor[i] + " ";	
	}
	return comparator;
}



window.onload = function() {
	getSearchBar();
	getCartBtnNum();
	getMenu();
	getProductWindow();
}