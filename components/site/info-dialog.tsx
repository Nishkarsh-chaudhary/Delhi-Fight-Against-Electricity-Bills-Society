'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
type Props = {title:string; paragraphs:string[]; label:string; className?:string};
export function InfoDialog({title,paragraphs,label,className='text-action'}:Props){
 return <Dialog><DialogTrigger asChild><Button variant="ghost" className={className}>{label}<ArrowRight size={17}/></Button></DialogTrigger><DialogContent className="info-dialog"><span className="eyebrow">Homepage preview</span><DialogTitle>{title}</DialogTitle><DialogDescription>{paragraphs[0]}</DialogDescription><div className="dialog-body">{paragraphs.slice(1).map(p=><p key={p}>{p}</p>)}</div><DialogClose asChild><Button className="button">Back to homepage</Button></DialogClose></DialogContent></Dialog>;
}
