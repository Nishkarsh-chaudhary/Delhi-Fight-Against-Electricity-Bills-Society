import type { Metadata } from 'next';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { society } from '@/content/home';
import './globals.css';
export const metadata:Metadata={title:society.name,description:'Awareness, documentation and participation for Delhi electricity consumers. Homepage design preview.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
