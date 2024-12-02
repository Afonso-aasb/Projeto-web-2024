import { Produto } from "./produto";

export class Item {
    [x: string]: Produto | number;
    public codigo: number = 0;
    public produto: Produto = new Produto();
    public quantidade: number = 0;
    public valor: number = 0;
}
