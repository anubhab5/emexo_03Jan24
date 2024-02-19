export class Product {
  id!: number;
  title!: string;
  price!: number;
  description!: string;
  images!: string[];
  category!: Category;
}

class Category {
  id!: number;
  image!: string;
  name!: string;
}
