
import { Product } from './../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product/product.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ShoppingcartItems } from "../interfaces/shoppingcart-items";
import { NavBarComponent } from "../nav-bar/nav-bar.component";


@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


	products: Product[] = [];
	filteredProducts: Product[] = [];
	wishList: Product[] = [];
	filteredArray: Product[] = [];
	shoppingCartList: ShoppingcartItems[] = [];
	category: number;
	showDetailsFlag: Boolean = false;
	productSelected: Object = {};
	@Output() wishListEventNav: EventEmitter<any> = new EventEmitter<any>();
	@Output() shoppingCartListEvent: EventEmitter<any> = new EventEmitter<any>();
	@ViewChild(NavBarComponent, { static: false }) private myChild: NavBarComponent;
	productUpdated: Boolean = false;
	showWishList: Boolean = false;
	showCartList: Boolean = false;
	errorMsg: String = "Oops!! No Products Found... Please Try Again Later !!";


	constructor(private route: ActivatedRoute,
		private productService: ProductService

	) { }

	async ngOnInit() {
		this.populateProducts();

	}

	//Method to Populate Products List
	private populateProducts() {
		this.productService.getAll()
			.subscribe((products: Product[]) => {
				this.products = products;
				this.filteredProducts = products;
			}, error => {
				console.log(error);
				this.errorMsg = "Oops!! No Products Found... Please Try Again Later !!";
			});
	}

	//Method to sort Products List by price
	sortProductsByPrice(data: string) {

		if (data == "1") {
			this.filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
			console.log(this.filteredProducts);
		}
		else {
			this.filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
		}
	}

	//Method to search/filter Products  by name and description
	searchProductsByText(data: string) {

		if (data == "") {
			this.filteredProducts = this.products;
		}
		else {
			this.filteredArray = this.filteredProducts.filter(element => {
				return element.name.toLowerCase().includes(data.toLowerCase()) || (element.content.toLowerCase().includes(data.toLowerCase()));
			});

			this.filteredProducts = this.filteredArray;
			if(this.filteredProducts.length==0)	{
	this.errorMsg = "Oops!! No Products Found... Please Try Again Later !!";
			}
		}

	}

	//Method to add Products to wishlist
	addToWishlist(product) {
		if (!this.wishList.includes(product)) {
			this.wishList.push(product);
		} else {
			for (var i = 0; i < this.wishList.length; i++) {
				if (i < this.wishList[i].$id == product.$id) {
					var index = i;
				}
			}
			this.wishList.splice(index, 1);
		}

		this.myChild.updateWishList(this.wishList);
	}

	//Method to show details of the clicked product
	showDetails(p) {
		this.showDetailsFlag = true;
		this.productSelected = p;
	}

	//Method to update products in the cart
	private updateItem(product) {
		if (product != "noproduct") {
			this.productUpdated = false;
			if (this.shoppingCartList.length > 0) {
				for (var i = 0; i < this.shoppingCartList.length; i++) {
					if (this.shoppingCartList[i].$id == product.id) {
						this.shoppingCartList[i].quantity += 1;
						this.productUpdated = true;
					}
				}
			}
			else {

				this.pushNewItem(product);
				this.productUpdated = true;
			}

			if (this.productUpdated == false) {
				this.pushNewItem(product);
			}
		}

		this.myChild.updateshopCartList(this.shoppingCartList);

	}

	//Method to add a new product in the cart
	pushNewItem(product) {
		var obj = {
			$id: product.id,
			name: product.name,
			price: product.price,
			rate: product.rate,
			imageUrl: product.imageUrl,
			quantity: 1

		}
		this.shoppingCartList.push(obj);
	}

	//Hide/Show Wishlist 
	showWishListFlag() {
		this.showWishList = true;
		this.showCartList = false;
	}

	//Hide/Show shoppingCartList
	showCartListFlag() {
		this.showCartList = true;
		this.showWishList = false;
	}

	//Show Products List
	goToList() {
		this.showCartList = false;
		this.showWishList = false;
		this.populateProducts();
	}

}
