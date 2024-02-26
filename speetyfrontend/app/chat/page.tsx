import React from 'react'
import poppins from "@/font/font";
import LeftmostBar from '@/components/chat/LeftmostBar';
import TopLeft from '@/components/chat/TopLeft';
import TopRight from '@/components/chat/TopRight';

export default function page() {
  return (
    <div className={poppins.className}>
<LeftmostBar />

<TopLeft />
<TopRight />

    </div>
  )
}
