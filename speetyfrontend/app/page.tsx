import Sec1 from "@/components/homepage/Sec1";
import Sec2 from "@/components/homepage/Sec2";
import Sec3 from "@/components/homepage/Sec3";
import Sec4 from "@/components/homepage/Sec4";
import Sec5 from "@/components/homepage/Sec5";
import Sec6 from "@/components/homepage/Sec6";
import Sec7 from "@/components/homepage/Sec7";
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});
export default function Home() {
  return (
    <div className={poppins.className}>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
      <Sec7 />
    </div>
  );
}
