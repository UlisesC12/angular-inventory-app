import { Component, VERSION } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //Modal
  isModalOpen = false;

  //Input Variables
  itemName: string = '';
  itemDesc: string = '';
  itemQty: number | undefined;
  itemPrice: number | undefined;
  itemSKU: number | undefined;

  products: Product[] = [
    {
      id: 1,
      name: 'Apple',
      description: 'Fruit',
      quantity: 12,
      price: 5,
      sku: 8291746782,
    },
    {
      id: 2,
      name: 'Watermelon',
      description: 'Fruit',
      quantity: 17,
      price: 7,
      sku: 8643523418,
    },
    {
      id: 3,
      name: 'Peach',
      description: 'Fruit',
      quantity: 23,
      price: 3,
      sku: 2764920174,
    },
  ];
  //Add items to inventory
  addItem(
    indx: number,
    itemName: string,
    itemDesc: string,
    itemQty: number | undefined,
    itemPrice: number | undefined,
    itemSKU: number | undefined
  ) {
    let variablesAreNotUndefined =
      indx != undefined &&
      itemName != undefined &&
      itemQty != undefined &&
      !isNaN(Number(itemQty)) &&
      itemPrice != undefined &&
      !isNaN(Number(itemPrice)) &&
      itemSKU != undefined &&
      !isNaN(Number(itemSKU)) &&
      itemSKU.toString().length == 10 &&
      itemDesc != undefined;

    if (variablesAreNotUndefined) {
      let newItem = {
        id: indx,
        name: itemName,
        description: itemDesc,
        quantity: itemQty,
        price: itemPrice,
        sku: itemSKU,
      };
      this.products.push(newItem);
      this.itemName = '';
      this.itemDesc = '';
      this.itemQty = undefined;
      this.itemPrice = undefined;
      this.itemSKU = undefined;
      this.isModalOpen = false;
    } else {
      alert(`Please, fill all the fields correctly, please verify:\n-SKU Digits\n-Numbers in Quantity, Price and SKU`);
    }
  }
  //Delete Items From Inventory
  deleteItem(index: number) {
    this.products.splice(index, 1);
    this.products.forEach((element, index) => {
      element.id = index + 1;
    });
  }
}
