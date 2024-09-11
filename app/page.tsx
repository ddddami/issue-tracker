import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <Pagination itemsCount={100} currentPage={1} pageSize={10}></Pagination>
  );
}
