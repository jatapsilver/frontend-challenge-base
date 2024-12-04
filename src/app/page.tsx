// eslint-disable-next-line @typescript-eslint/naming-convention
import RootLayout from "./layout";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Navbar from "../components/navbar";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Carrousel from "../components/carrousel";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Search from "../components/search";

export default function home(): JSX.Element {
  return (
    <RootLayout>
      <Navbar />
      <Carrousel />
      <Search />
    </RootLayout>
  );
}
