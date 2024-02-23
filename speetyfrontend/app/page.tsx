import Sec1 from "@/components/homepage/Sec1";
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
    </div>
  );
}