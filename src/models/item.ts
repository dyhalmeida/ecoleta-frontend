export default interface IItem {
  className?: string;
  id: number;
  title: string;
  image_url: string;
  handleClick(id?: number): any;
}
